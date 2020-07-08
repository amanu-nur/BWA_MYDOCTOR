import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../component';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai konsultasi</Text>
      <Input title="Email Address" />
      <Gap height={24} />
      <Input title="Password" />
      <Link
        title="Forgot My Password"
        size={12}
        onPress={() => {
          alert('Maaf fitur ini belum tersedia');
        }}
      />
      <Gap height={40} />
          <Button title="Sing In" />
          <Gap height={30}/>
      <Link
        title="Create New Account"
        size={16} align='center'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white
  },
  text: {
    marginVertical: 40,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 154,
  },
});
