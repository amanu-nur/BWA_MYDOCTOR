import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcBack} from '../../../assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IcBack />;
    }
    if (icon === 'back-light') {
      return <IcBack />;
    }
    return <IcBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
