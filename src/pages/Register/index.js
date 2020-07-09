import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../component';
import { colors } from '../../utils/colors';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <Input title="Full Name" />
        <Gap height={24}/>
        <Input title="Pekerjaan" />
        <Gap height={24}/>
        <Input title="Email Address" />
        <Gap height={24}/>
        <Input title="Password" />
        <Gap height={40}/>
        <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
});
