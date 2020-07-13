import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcSendActive, IcSendDisable} from '../../../assets';
import {colors} from '../../../utils';

export default function BtnIconSend({disable}) {
  return (
    <TouchableOpacity style={styles.container(disable)}>
      {disable && <IcSendDisable />}
      {!disable && <IcSendActive />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
