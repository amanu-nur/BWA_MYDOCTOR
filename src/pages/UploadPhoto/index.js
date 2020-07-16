import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../component';
import {ILUsernull, IcAddPhoto, IcRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-crop-picker';

export default function UploadPhoto({navigation}) {
  const [icon, setIcon] = useState(false);
  const [photo, setPhoto] = useState(ILUsernull);

  const uploadPhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      const source = {uri: image.path};
      setPhoto(source);
      setIcon(true);
      console.log(image.path)
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.BorderUser} onPress={uploadPhoto}>
            <Image source={photo} style={styles.photo} />
            {!icon && <IcAddPhoto style={styles.icon} />}
            {icon && <IcRemovePhoto style={styles.icon} />}
          </TouchableOpacity>
          <Text style={styles.name}>Alexander david</Text>
          <Text style={styles.profesion}>Produc Designer</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            disable={!icon}
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={40} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  photo: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  BorderUser: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 24,
    textAlign: 'center',
  },
  profesion: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
