import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumyUser, IcStar} from '../../../assets';
import {fonts, colors} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DumyUser} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Amanu Nur Abdillah</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.star}>
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
    }, profile: {
        flex: 1,
    },
  star: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  category: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
