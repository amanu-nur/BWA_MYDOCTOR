import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';
import { Fire } from '../../config';
import { fonts, showError, showSuccess, storeData, useForm } from '../../utils';
import { colors } from '../../utils/colors';

export default function Login({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({type: 'SET_LOADING', value: false});
        // get database
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDb) => {
            if (resDb.val()) {
              storeData('user', resDb.val());
            }
            navigation.replace('MainApp');
          });
        // ------------
        const success = 'Login Success';
        showSuccess(success);
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo />
        <Text style={styles.text}>Masuk dan mulai konsultasi</Text>
        <Input
          title="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          title="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={12} />
        <Link
          title="Forgot My Password"
          size={12}
          onPress={() => navigation.navigate('ResetPass')}
        />
        <Gap height={40} />
        <Button title="Sing In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    marginVertical: 40,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 154,
  },
});
