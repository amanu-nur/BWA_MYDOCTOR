import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Header} from '../../component';
import {colors, fonts} from '../../utils';

export default function News({navigation, route}) {
  const dataNews = route.params;

  return (
    <View style={styles.container}>
      <Header title="News" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contant}>
          <Text style={styles.title}>{dataNews.title}</Text>
          <Image source={{uri: dataNews.urlToImage}} style={styles.img} />
          <View>
            <Text style={styles.date}>{dataNews.publishedAt}</Text>
            <Text style={styles.news}>{dataNews.content}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contant: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.primary,
  },
  img: {
    height: 150,
    width: 300,
    marginTop: 15,
    borderRadius: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 10,
  },
  news: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    marginTop: 15,
    color: colors.text.primary,
  },
});
