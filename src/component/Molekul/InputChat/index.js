import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import { Button } from '../../Atom';

export default function InputChat() {
  return (
    <View style={styles.container}>
          <TextInput style={styles.Input} placeholder="Tulis pesan untuk Alexander" />
          <Button type='btn-icon-send' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
  Input: {
    backgroundColor: colors.disable,
    borderRadius: 10,
      padding: 14,
      flex: 1,
      marginRight: 10,
      fontFamily: fonts.primary.normal,
      fontSize: 14,
      maxHeight: 45
  },
});
