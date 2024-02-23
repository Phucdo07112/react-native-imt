import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Pin from '../components/pin';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonExpoProps {
  text: string;
  background: string;
}

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

export default function Bai4() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <View style={{flex: 1}}>
          <Pin pin={data[0]} />
          <Pin pin={data[1]} />
          <Pin pin={data[2]} />
          <Pin pin={data[3]} />
          <Pin pin={data[0]} />
        </View>
        <View style={{flex: 1}}>
          <Pin pin={data[4]} />
          <Pin pin={data[5]} />
          <Pin pin={data[6]} />
          <Pin pin={data[0]} />
          <Pin pin={data[0]} />
        </View>
        {/* <FlatList
          data={data}
          renderItem={item => <Pin pin={item} />}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        /> */}
      </View>
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']} // Từ trắng sang trong suốt
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            zIndex: 100,
            flexDirection: 'column-reverse',
          }}>
          <View
            style={{
              margin: 20,
              marginTop: 0,
              height: 50,
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
              @ PiA 2.5
            </Text>
          </View>
          <View
            style={{
              margin: 20,
              marginTop: 0,
              height: 50,
            }}>
            <Text style={{color: '#007bff', textAlign: 'center', fontSize: 20}}>
              Forgot password?
            </Text>
          </View>
          <View
            style={{
              margin: 20,
              marginTop: 0,
              height: 50,
            }}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              margin: 20,
              marginTop: 0,
              backgroundColor: 'white',
            }}>

            <TextInput
              style={{flex: 1, color: 'black', fontSize: 20}}
              placeholder="Password"
              secureTextEntry={true} // Ẩn chữ và hiển thị dưới dạng *
              placeholderTextColor="black" // Màu chữ của placeholder
              keyboardType="default"
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 5,
              margin: 20,
              backgroundColor: 'white',
            }}>

            <TextInput
              style={{flex: 1, color: 'black', fontSize: 20}}
              placeholder="Username"
              placeholderTextColor="black" // Màu chữ của placeholder
              keyboardType="default"
              onChangeText={text => setUsername(text)}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
const {width} = Dimensions.get('window');
const itemWidth = width / numColumns;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'white',
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
  image: {
    width: width / numColumns - 16,
    height: 350,
  },
});
