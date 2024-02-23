import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Banner from './banner';
import Main from './main';
interface ButtonExpoProps {
  text: string;
  background: string;
}

const trending = [
  {
    id: 1,
    title: 'See the Best Place Diving in the World',
    tag: ['diving', 'guide'],
    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: 2,
    title: 'See the Best Place Diving in the World',
    tag: ['diving', 'guide'],
    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: 3,
    title: 'See the Best Place Diving in the World',
    tag: ['diving', 'guide'],
    uri: 'https://i.pinimg.com/564x/6f/9c/3e/6f9c3e191d2b4fe3772d39af645227d7.jpg',
  },
  {
    id: 4,
    title: 'See the Best Place Diving in the World',
    tag: ['diving', 'guide'],
    uri: 'https://i.pinimg.com/564x/6f/9c/3e/6f9c3e191d2b4fe3772d39af645227d7.jpg',
  },
];

const data = [
  {
    id: '1',
    uri: 'https://i.pinimg.com/564x/6f/9c/3e/6f9c3e191d2b4fe3772d39af645227d7.jpg',
  },
  {
    id: '2',
    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: '3',
    uri: 'https://i.pinimg.com/564x/12/a9/9b/12a99bef729af910480b6e16d478f895.jpg',
  },
  {
    id: '4',
    uri: 'https://i.pinimg.com/564x/5c/86/bc/5c86bcdc2f649e7e3a0689c9572dd565.jpg',
  },
  {
    id: '5',
    uri: 'https://i.pinimg.com/564x/e4/7b/75/e47b7583df131031e4f72d38aa3acd80.jpg',
  },
  {
    id: '6',
    uri: 'https://i.pinimg.com/564x/02/3f/a7/023fa7b8098fe6037352992e564e676b.jpg',
  },
  {
    id: '7',
    uri: 'https://i.pinimg.com/736x/76/44/a3/7644a32940e09177fd717d8196800063.jpg',
  },
  // Add more images to the data array
];

const numColumns = 2; // Số cột trong grid

const ButtonExpo: React.FC<ButtonExpoProps> = props => {
  return (
    <View
      style={{
        width: props.text === '0' ? 204 : 102,
        height: 102,
        backgroundColor: props.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30, color: 'white'}}>{props.text}</Text>
    </View>
  );
};
export default function Travel() {
  const [currentImage, setCurrentImage] = useState(0);
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  const handleScroll = (e: any) => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor(
          (nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth,
        );
      }
      setCurrentImage(imageIndex);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: '#3da9fc'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            fontWeight: '600',
            marginTop: 20,
          }}>
          News
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'rgba(255,255,255,0.2)',
            margin: 20,
            paddingLeft: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            style={{marginRight: 10, marginLeft: 10}}
            source={require('../../assets/images/search.png')}
          />
          <TextInput
            style={{fontSize: 20}}
            placeholder="Search"
            placeholderTextColor="white"
          />
        </View>
      </View>
      <View style={{marginTop: 20, marginLeft: 10}}>
        <ScrollView
          horizontal
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
            width: screenWidth * trending.length,
            height: 250,
            flexDirection: 'row',
          }}>
          {trending.map((item, index) => {
            return <Banner key={index} item={item} />;
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          {Array.from({length: trending.length}, (_, index) => {
            return (
              <Text
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor:
                    index === currentImage ? '#3da9fc' : 'rgba(0,0,0,0.2)',
                  borderRadius: 100,
                }}></Text>
            );
          })}
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          flexGrow: 1,
          height: screenHeight * 0.21 * trending.length,
          width: '100%',
        }}>
        <View
          style={{
            borderTopWidth: 1,
            paddingTop: 10,
            borderColor: 'gray',
            width: '100%',
          }}>
          {trending.map((item, index) => {
            return <Main key={index} item={item} />;
          })}
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 75,
          backgroundColor: 'white',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 30,
          paddingRight: 30,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/home.png')} />
          <Text style={{color: '#A173FF', fontSize: 12, fontWeight: '500'}}>
            Home
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/bullhorn.png')} />
          <Text style={{color: '#454545', fontSize: 12, fontWeight: '500'}}>
            Announcements
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/bell.png')} />
          <Text style={{color: '#454545', fontSize: 12, fontWeight: '500'}}>
            Notifications
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/user.png')} />
          <Text style={{color: '#454545', fontSize: 12, fontWeight: '500'}}>
            Members
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    top: 0,
    left: 0,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#007bff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  item: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
