import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap, Loading} from '../../component';
import {colors} from '../../utils/colors';
import {fonts, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setLoading(false);

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

        showMessage({
          message: `Login succsess `,
          type: 'default',
          backgroundColor: colors.primary, // background color
          color: '#ffffff', // text color
        });
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage = err.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.errorMessage, // background color
          color: '#ffffff', // text color
        });
      });
  };
  return (
    <>
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
          <Link
            title="Forgot My Password"
            size={12}
            onPress={() => {
              alert('Maaf fitur ini belum tersedia');
            }}
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
      {loading && <Loading />}
    </>
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
