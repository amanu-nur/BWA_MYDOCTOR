import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {DumyDoctor1} from '../../../assets';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={DumyDoctor1} style={styles.avatar} />
      <View>
        <View style={styles.contant}>
          <Text style={styles.text}>
            Oh tentu saja tidak karena jeruk itu sangat sehat...
          </Text>
        </View>
        <Text style={styles.date}>4.22 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  contant: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 12,
    borderRadius: 30 / 2,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
