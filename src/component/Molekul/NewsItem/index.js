import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts, LimitString } from '../../../utils';

export default function NewsItem({title, date, image, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contant}>
        <Text style={styles.topic}>
          {/* {title} */}
          {LimitString(title, 40)}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={image} style={styles.TopicImg} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingTop: 16,
    borderBottomColor: colors.border,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  contant: {
    flex: 1,
  },
  topic: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  TopicImg: {
    height: 60,
    width: 80,
    borderRadius: 11,
  },
});
