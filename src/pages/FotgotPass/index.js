import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, Input } from '../../component';
import { Fire } from '../../config';
import { colors, fonts, showError, showSuccess, useForm } from '../../utils';

export default function ResetPass({navigation}) {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: '',
  });

  const Reset = () => {
    dispatch({type: 'SET_LOADING', value: true});
    console.log(form.email);

    Fire.auth()
      .sendPasswordResetEmail(form.email)
      .then(function () {
        showSuccess('Successful Email Sent');
        dispatch({ type: 'SET_LOADING', value: false });
        navigation.replace('Login')
      })
      .catch((err) => {
        showError(err.message);
        dispatch({type: 'SET_LOADING', value: false});
      });
  };

  return (
    <>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>Forgot Password</Text>
          <Text style={styles.desc}>
            Enter your email and we'll send you a link to reset your password
          </Text>
        </View>
        <View>
          <Input
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={16} />
          <Button title="Submit" onPress={Reset} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 13,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 12,
  },
});
