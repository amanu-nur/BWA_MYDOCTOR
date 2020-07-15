import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import {colors} from '../../../utils';

export default function Loading() {
  return (
    <View style={styles.container}>
      <WaveIndicator color={colors.primary} size={70} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.loadingBackground,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
