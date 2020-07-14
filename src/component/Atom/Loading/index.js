import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import {colors, fonts} from '../../../utils';

export default function Loading() {
  return (
    <View style={styles.container}>
      <WaveIndicator color={colors.primary} size={70} />
      <Text style={styles.text}>Mohon Tunggu ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    }
});
