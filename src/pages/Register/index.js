import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utils/colors';

export default function Register({navigation}) {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onContinue = () => {
    console.log(fullName, profession, email, password);
  };

  return (
    <View style={styles.container}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            title="Full Name"
            value={fullName}
            onChangeText={(value) => setFullName(value)}
          />
          <Gap height={24} />
          <Input
            title="Pekerjaan"
            value={profession}
            onChangeText={(value) => setProfession(value)}
          />
          <Gap height={24} />
          <Input
            title="Email Address"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Gap height={24} />
          <Input
            title="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
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
