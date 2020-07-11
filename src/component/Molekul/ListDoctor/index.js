import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DumyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Amanu Nur Abdillah</Text>
        <Text style={styles.chat}>
          Baik ibu, terimakasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  chat: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.primary,
  },
});
