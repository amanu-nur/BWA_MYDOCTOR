import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {DumyTopic} from '../../../assets';

export default function NewsItem({ title, date, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <Text style={styles.topic}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={image} style={styles.TopicImg} />
    </View>
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
    alignItems:'center'
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
