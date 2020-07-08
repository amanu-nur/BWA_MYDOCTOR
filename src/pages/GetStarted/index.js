import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILWelcome} from '../../assets';
import {Button, Gap} from '../../component';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILWelcome} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sing In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginTop: 91,
  },
});
