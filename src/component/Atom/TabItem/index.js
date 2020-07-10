import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    IcHome,
    IcHomeActive,
    IcHospitals,
    IcHospitalsActive,
    IcMessage,
    IcMessageActive
} from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Doctor') return active ? <IcHomeActive /> : <IcHome />;
    if (title === 'Message')
      return active ? <IcMessageActive /> : <IcMessage />;
    if (title === 'Hospitals')
      return active ? <IcHospitalsActive /> : <IcHospitals />;
    return <IcHome />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};
export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    marginTop: 4,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
  }),
});
