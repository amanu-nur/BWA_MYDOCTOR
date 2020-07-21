import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Doctor, Gap, HomeProfile, NewsItem, RatedDoctor} from '../../component';
import {Fire} from '../../config';
import {colors, fonts, showError} from '../../utils';

export default function Home({navigation}) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    getTopRated();
    getNews();
  }, []);

  const getTopRated = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });

          const filterData = data.filter((el) => el !== null);
          setDoctors(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setCategory(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  // news api

  const getNews = () => {
    const ApiHealth =
      'http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=bd53b9de417b41dbbe9eedb128524d88';
    fetch(ApiHealth)
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrappercontant}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {category.map((item) => {
                  return (
                    <Doctor
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrappercontant}>
            <Text style={styles.text}>Top Rated Doctors</Text>

            {doctors.map((doctor) => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.data.fullName}
                  desc={doctor.data.profession}
                  avatar={{uri: doctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
              );
            })}
            <Text style={styles.text}>Good News</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <NewsItem
                title={item.title}
                date={item.publishedAt}
                image={{uri: item.urlToImage}}
                onPress={() => navigation.navigate('News', item)}
              />
            )}
          />

          <Gap height={30} />
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
  content: {
    backgroundColor: colors.white,
    flex: 1,

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
  wrappercontant: {
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
