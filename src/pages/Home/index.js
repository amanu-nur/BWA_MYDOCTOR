import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {HomeProfile, Doctor, RatedDoctor, NewsItem, Gap} from '../../component';
import {fonts, colors} from '../../utils';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.welcome}>
          Mau konsultasi dengan siapa hari ini?
        </Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16} />
              <Doctor />
              <Doctor />
              <Doctor />
              <Doctor />
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.text}>Top Rated Doctors</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />
        <Text style={styles.text}>Good News</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  welcome: {
    marginTop: 30,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginBottom: 16,
    maxWidth: 212,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
