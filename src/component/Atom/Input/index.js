import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';
import { fonts } from '../../../utils';

export default function index({title}) {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    padding: 12,
    marginTop: 6,
  },
  text: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 16,
  },
});
