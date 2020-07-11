import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors, fonts} from '../../utils';
import {ListDoctor} from '../../component';

export default function Message() {
  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Message</Text>
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  contant: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    paddingHorizontal: 16,
    marginTop: 30,
  },
});
