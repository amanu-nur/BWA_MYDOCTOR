import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../component';
import {ILUsernull, IcAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.BorderUser}>
            <Image source={ILUsernull} style={styles.photo} />
            <IcAddPhoto style={styles.icon} />
          </View>
          <Text style={styles.name}>Alexander david</Text>
          <Text style={styles.profesion}>Produc Designer</Text>
        </View>
        <View>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('MainApp')}
          />
          <Gap height={40} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.navigate('MainApp')}
          />
        </View>
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
    paddingHorizontal: 40,
    flex: 1,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  photo: {
    height: 110,
    width: 110,
  },
  BorderUser: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 24,
    textAlign: 'center',
  },
  profesion: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
