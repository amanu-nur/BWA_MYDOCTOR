import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function UserProfile({name, desc, isRemove, photo, onPress}) {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.border}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IcRemovePhoto style={styles.icon} />}
        </View>
      )}

      {isRemove && (
        <TouchableOpacity style={styles.border} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IcRemovePhoto style={styles.icon} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  border: {
    height: 130,
    width: 130,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  icon: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});
