import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors, fonts} from '../../utils';
import {ListDoctor} from '../../component';
import {DumyDoctor1, DumyDoctor2, DumyDoctor3} from '../../assets';

export default function Message() {
  const [doctors] = useState([
    {
      id: 1,
      profile: DumyDoctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terimakasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DumyDoctor2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DumyDoctor3,
      name: 'Jhon McParker Steve',
      desc: 'Oke tentu pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Message</Text>
          {doctors.map((doctor) => {
            return (
              <ListDoctor
                key={doctor.id}
                profile={doctor.profile}
                name={doctor.name}
                desc={doctor.desc}
              />
            );
          })}
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
