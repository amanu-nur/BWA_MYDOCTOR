import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ILBackgroundHospitals} from '../../assets';
import {ListHospitals} from '../../component';
import {colors, fonts} from '../../utils';

export default function Message() {
  const Hospitals = 'https://unsplash.com/photos/pV5arhEZHiA';
  return (
    <View style={styles.container}>
      <ImageBackground source={ILBackgroundHospitals} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>Tersedia 3</Text>
      </ImageBackground>
      <View style={styles.contant}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ListHospitals
              name="Citra Bunga Merdeka"
              desc="Jln.Surya Sejahtera 20"
              image={{uri: Hospitals}}
            />
            <ListHospitals
              name="Happy Family & Kids"
              desc="Jln.Surya Sejahtera 20"
              image={{uri: Hospitals}}
            />
            <ListHospitals
              name="Tingkatan Paling Atas"
              desc="Jln.Surya Sejahtera 20"
              image={{uri: Hospitals}}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  contant: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
});
