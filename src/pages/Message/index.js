import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {List} from '../../component';
import {Fire} from '../../config';
import {colors, fonts, getData} from '../../utils';
export default function Message({navigation}) {
  const [user, setUser] = useState([]);
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserLokal();

    const rootDb = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDb.child(urlHistory);

    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const olDdata = snapshot.val();
        const data = [];

        const promises = await Object.keys(olDdata).map(async (key) => {
          const urlUidDoctor = `doctors/${olDdata[key].uidPartner}`;
          const detailDoctor = await rootDb.child(urlUidDoctor).once('value');

          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...olDdata[key],
          });
        });
        await Promise.all(promises);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserLokal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Message</Text>
          {historyChat.map((chat) => {
            const dataDoctor = {
              id: chat.detailDoctor.uid,
              data: chat.detailDoctor,
            };
            return (
              <List
                key={chat.id}
                profile={{uri: chat.detailDoctor.photo}}
                name={chat.detailDoctor.fullName}
                desc={chat.lastContentChat}
                onPress={() => navigation.navigate('Chatting', dataDoctor)}
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
