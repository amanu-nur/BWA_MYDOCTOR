import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../component';
import {colors, getData} from '../../utils';
import {ILUsernull} from '../../assets';
import {Fire} from '../../config';

export default function UpdateProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    photo: ILUsernull,
  });

  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  });

  const updateProfile = () => {
    console.log('profile', profile);
    const data = profile;
    data.photo = profile.photo.uri;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then((res) => {
        showMessage({
          message: `Register succsess `,
          type: 'default',
          backgroundColor: colors.primary, // background color
          color: '#ffffff', // text color
        });
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.errorMessage, // background color
          color: '#ffffff', // text color
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Update Profile"
        onPress={() => navigation.goBack('UserProfile')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contant}>
          <Profile isRemove photo={profile.photo} />
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
            onChangeText={value =>  changeText('profession', value) }
          />
          <Gap height={24} />
          <Input title="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input title="Password" />
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
