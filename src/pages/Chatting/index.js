import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../component';
import {colors, fonts, getData, getChatTime, setDateChat} from '../../utils';
import {Fire} from '../../config';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
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
  }, [dataDoctor.data.uid, user.uid]);

  const getDataUserLokal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const sendChat = () => {
    setChatContent('');

    const today = new Date();
    const ChatId = `${user.uid}_${dataDoctor.data.uid}`;

    const url = `chatting/${ChatId}/allChat/${setDateChat(today)}`;

    const urlMessageUser = `messages/${user.uid}/${ChatId}`;
    const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${ChatId}`;

    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.data.uid,
    };

    const dataHistoryChatDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    // kirim fire base

    Fire.database()
      .ref(url)
      .push(data)
      .then((res) => {
        Fire.database().ref(urlMessageUser).set(dataHistoryChatUser);
        Fire.database().ref(urlMessageDoctor).set(dataHistoryChatDoctor);
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
                    const isMe = itemChat.data.sendBy === user.uid;
                    return (
                      <ChatItem
                        key={itemChat.id}
                        isMe={isMe}
                        date={itemChat.data.chatTime}
                        text={itemChat.data.chatContent}
                        photo={isMe ? null : {uri: dataDoctor.data.photo}}
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
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
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
