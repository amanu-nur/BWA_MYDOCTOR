import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, List, Profile, Gap} from '../../component';
import {colors, getData} from '../../utils';
import {ILUsernull} from '../../assets';
import {Fire} from '../../config';

export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILUsernull,
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  });

  const singOut = () => {
    Fire.auth().signOut().then(function() {
      navigation.navigate('GetStarted')
    }).catch(function(error) {
      // An error happened.
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Gap height={10} />
          {profile.fullName.length > 0 && (
            <Profile
              name={profile.fullName}
              desc={profile.profession}
              photo={profile.photo}
            />
          )}

          <Gap height={14} />
          <List
            type="next"
            name="Edit Profile"
            desc="Last update yesterday"
            icon="edit-profile"
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <List
            type="next"
            name="Language"
            desc="Available 2 language"
            icon="language"
          />
          <List
            type="next"
            name="Give Us Rate"
            desc="On Google Play Store"
            icon="rate"
          />
          <List
            type="next"
            name="Sing Out"
            desc="Read our guidelines"
            icon="help"
            onPress={singOut}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
