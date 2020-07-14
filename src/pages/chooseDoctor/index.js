import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DumyDoctor1, DumyDoctor2, DumyDoctor3, DumyDoctor4} from '../../assets';
import {Header, List} from '../../component';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List
          type="next"
          profile={DumyDoctor1}
          name="Alexander jannie"
          desc="Wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
        <List
          type="next"
          profile={DumyDoctor2}
          name="Alexander jannie"
          desc="Pria"
        />
        <List
          type="next"
          profile={DumyDoctor3}
          name="Alexander jannie"
          desc="Wanita"
        />
        <List
          type="next"
          profile={DumyDoctor4}
          name="Alexander jannie"
          desc="Pria"
        />
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
