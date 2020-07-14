import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, List, Profile, Gap} from '../../component';
import {colors} from '../../utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Shayna Melinda" desc='Product Designer' />
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
        name="Help center"
        desc="Read our guidelines"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
});
