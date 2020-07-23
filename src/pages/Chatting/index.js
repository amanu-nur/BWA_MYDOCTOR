import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../component';
import {Fire} from '../../config';
import {colors, fonts, getChatTime, getData, setDateChat} from '../../utils';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  const dataChat = chatData.reverse();

  // console.log(chatData)

  useEffect(() => {
    getDataUserLokal();

    const ChatId = `${user.uid}_${dataDoctor.data.uid}`;
    const url = `chatting/${ChatId}/allChat/`;

    Fire.database()
      .ref(url)
      .endAt(30)
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

  // const isMe = itemChat.data.sendBy === user.uid;

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
        <FlatList
          scrollIndicatorInsets
          data={dataChat}
          inverted
          style={{flex: 1}}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View>
              <Text style={styles.chatdate}>{item.id}</Text>
              <FlatList
                data={item.data}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <ChatItem
                    isMe={item.data.sendBy === user.uid}
                    date={item.data.chatTime}
                    text={`${item.data.chatContent}   `}
                    photo={
                      item.data.sendBy === user.uid
                        ? null
                        : {uri: dataDoctor.data.photo}
                    }
                  />
                )}
              />
            </View>
          )}
        />
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
    backgroundColor: colors.white,
  },
  chatdate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
