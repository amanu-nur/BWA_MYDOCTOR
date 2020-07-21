import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../component';
import {colors} from '../../utils';

export default function DoctorProfile({ navigation, route }) {
  const profileDoctor = route.params;
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile name={profileDoctor.data.fullName} desc={profileDoctor.data.profession} photo={{uri: profileDoctor.data.photo}}/>
          <Gap height={10} />
          <ProfileItem label="Alumnus" value={profileDoctor.data.university} />
          <ProfileItem
            label="Tempat Praktik"
            value={profileDoctor.data.hospital_address}
          />
          <ProfileItem label="No.STR" value={profileDoctor.data.str_number} />
          <View style={styles.action}>
            <Button
              title="Start Consultation"
              onPress={() => navigation.navigate('Chatting', profileDoctor)}
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
    paddingBottom:16
  },
});
