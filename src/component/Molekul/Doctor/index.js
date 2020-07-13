import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILDocUmum, ILDocPsikiater, ILDocObat, ILDocAnak} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Doctor({category, onPress}) {
  const Icon = () => {
    if (category === 'dokter umum')
      return <ILDocUmum style={styles.ilustration} />;
    if (category === 'psikiater')
      return <ILDocPsikiater style={styles.ilustration} />;
    if (category === 'dokter obat')
      return <ILDocObat style={styles.ilustration} />;
    if (category === 'dokter anak')
      return <ILDocAnak style={styles.ilustration} />;
    return <ILDocUmum style={styles.ilustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 105,
    height: 130,
  },
  ilustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
