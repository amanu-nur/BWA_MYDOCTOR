import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

export default function ListHospitals({name, desc, image}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.name}>Rumah Sakit</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: colors.border,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    marginTop: 6,
  },
});
