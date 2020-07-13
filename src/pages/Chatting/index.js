import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../component';
import {colors, fonts} from '../../utils';

export default function Chatting({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title="Alexander Jannie"
        desc="Dokter Anak"
        type="dark-profile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contant}>
        <ScrollView>
          <Text style={styles.chatdate}>Senin, 21 Maret, 2020</Text>
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </ScrollView>
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    },
    contant: {
        flex: 1
    },
  chatdate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
