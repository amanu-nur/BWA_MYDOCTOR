import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, List } from '../../component';
import { Fire } from '../../config';
import { colors } from '../../utils';

export default function ChooseDoctor({navigation, route}) {
  const [listDoctor, setListDoctor] = useState([]);
  const item = route.params;
  useEffect(() => {
    callDoctor(item.category);
  }, []);

  const callDoctor = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
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
          setListDoctor(data);
          
        }
      });
  };
  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title={`Pilih ${item.category}`}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {listDoctor.map((doctor) => {
          return (
            <List
              type="next"
              profile={{uri: doctor.data.photo}}
              name={doctor.data.fullName}
              desc={doctor.data.gender}
              onPress={() => navigation.navigate('DoctorProfile', doctor)}
            />
          );
        })}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
