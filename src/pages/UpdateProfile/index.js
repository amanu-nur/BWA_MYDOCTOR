import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../component';
import {colors} from '../../utils';

export default function UpdateProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title="Update Profile"
        onPress={() => navigation.goBack('UserProfile')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contant}>
          <Profile isRemove />
          <Gap height={26} />
          <Input title="Full Name" />
          <Gap height={24} />
          <Input title="Pekerjaan" />
          <Gap height={24} />
          <Input title="Email" />
          <Gap height={24} />
          <Input title="Password" />
          <Gap height={40} />
          <Button title="Save Profile" onPress={() => navigation.goBack()}/>
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
