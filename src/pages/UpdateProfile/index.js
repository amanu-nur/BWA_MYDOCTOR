import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { ILUsernull } from '../../assets';
import { Button, Gap, Header, Input, Profile } from '../../component';
import { Fire } from '../../config';
import { colors, getData, showError, showSuccess, storeData } from '../../utils';

export default function UpdateProfile({navigation}) {
  const [profile, setProfile] = useState(
    {
      fullName: '',
      profession: '',
      email: '',
      photo: ILUsernull,
    },
    [],
  );

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILUsernull);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const updateProfile = () => {

    if (password.length > 0) {
      if (password.length < 6) {
        
        showError('Password Kurang Dari 6 Karakter')
      } else {
        updatePassword()
        updateProfileData()
        navigation.replace('MainApp')
      }
    } else {
      updateProfileData()
     
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).then((succsess) => {
          showSuccess('Update Password Successful')
        });
      } 
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;

    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then((res) => {
        showSuccess('Update profile Succsess')
        storeData('user', data);
        navigation.replace('MainApp', data)
      })
      .catch((err) => {
        showError(err.message)
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      const source = {uri: image.path};
      console.log(image);
      setPhotoForDB(`data:${image.mime};base64,${image.data}`);
      setPhoto(source);
      setIcon(true);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Update Profile" onPress={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contant}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={26} />
          <Input
            title="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            title="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input title="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input
            title="Password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={updateProfile} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contant: {
    padding: 40,
    paddingTop: 0,
  },
});
