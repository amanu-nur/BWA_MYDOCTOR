import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor({onPress, name, desc, avatar}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.star}>
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
      </View>
    </TouchableOpacity>
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
