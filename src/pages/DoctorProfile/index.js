import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../component';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile name="Alexander" desc="Dokter Anak" />
          <Gap height={10} />
          <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
          <ProfileItem
            label="Tempat Praktik"
            value="Rumah Sakit Umum, Bandung"
          />
          <ProfileItem label="No.STR" value="0000116622081996" />
          <View style={styles.action}>
            <Button
              title="Start Consultation"
              onPress={() => navigation.navigate('Chatting')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
