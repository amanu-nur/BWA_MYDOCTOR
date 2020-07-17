import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {fonts, colors} from '../../../utils';

export default function index({title, value, onChangeText, secureTextEntry, disable}) {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurFrom = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurFrom}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
    marginTop: 6,
  }),

  text: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 16,
  },
});
