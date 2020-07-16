import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../component';
import {Fire} from '../../config';
import {colors} from '../../utils/colors';
import {useForm} from '../../utils/useForm';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {storeData} from '../../utils';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    console.log(form);

    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        const successMessage = success.user.email;
        setLoading(false);
        setForm('reset');

        // database firebase

        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };

        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        // -------------------------------
        storeData('user', data);
        showMessage({
          message: `Register succsess ` + successMessage,
          type: 'default',
          backgroundColor: colors.primary, // background color
          color: '#ffffff', // text color
        });
        navigation.navigate('UploadPhoto');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
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
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              title="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              title="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
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
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
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
