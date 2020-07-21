import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../component';
import {colors, fonts, getData, getChatTime, setDateChat} from '../../utils';
import {Fire} from '../../config';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  const [chatContant, setChatContant] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserLokal();

    const ChatId = `${user.uid}_${dataDoctor.data.uid}`;
    const url = `chatting/${ChatId}/allChat/`;
    Fire.database()
      .ref(url)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newData = [];

            Object.keys(dataChat).map((itemChat) => {
              newData.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newData,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, []);

  const getDataUserLokal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const sendChat = () => {
    setChatContant('');

    const today = new Date();
    const ChatId = `${user.uid}_${dataDoctor.data.uid}`;

    const url = `chatting/${ChatId}/allChat/${setDateChat(today)}`;

    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContant: chatContant,
    };

    // kirim fire base

    Fire.database()
      .ref(url)
      .push(data)
      .then((res) => {
        // success
      })
      .catch((err) => {
        // err
      });
  };

  return (
    <View style={styles.container}>
      <Header
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        type="dark-profile"
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contant}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {chatData.map((chat) => {
              return (
                <View key={chat.id}>
                  <Text style={styles.chatdate}>{chat.id}</Text>
                  {chat.data.map((itemChat) => {
                    return (
                      <ChatItem
                        key={itemChat.id}
                        isMe={itemChat.data.sendBy === user.uid}
                        text={itemChat.data.chatContant}
                        date={itemChat.data.chatTime}
                      />
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <InputChat
        value={chatContant}
        onChangeText={(value) => setChatContant(value)}
        onPress={sendChat}
        name={dataDoctor.data.fullName}
      />
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
  },
  chatdate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
