import React,{useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {HomeProfile, Doctor, RatedDoctor, NewsItem, Gap} from '../../component';
import {fonts, colors, getData} from '../../utils';
import {
  JSONCategoryDoctor,
  DumyDoctor1,
  DumyDoctor2,
  DumyDoctor3,
} from '../../assets';

export default function Home({ navigation }) {
 
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
                {JSONCategoryDoctor.data.map((item) => {
                  return (
                    <Doctor
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrappercontant}>
            <Text style={styles.text}>Top Rated Doctors</Text>
            <RatedDoctor
              avatar={DumyDoctor1}
              name="Alexander"
              desc="psikiater"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DumyDoctor2}
              name="Alexander"
              desc="psikiater"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DumyDoctor3}
              name="Alexander"
              desc="psikiater"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.text}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
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
