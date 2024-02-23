import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Bac1({navigation}: any) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const handleInputA = (text: string) => {
    // Kiểm tra nếu không phải là số
    if (!/^\d+$/.test(text) && text.length > 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập vào một số.');
      return;
    }

    // Nếu là số, cập nhật giá trị
    setA(text);
  };
  const handleInputB = (text: string) => {
    // Kiểm tra nếu không phải là số
    if (!/^\d+$/.test(text) && text.length > 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập vào một số.');
      return;
    }

    // Nếu là số, cập nhật giá trị
    setB(text);
  };

  const handleOperator = () => {
    let tinhtoan = '';
    if (a === '0') {
      if (b === '0') {
        tinhtoan = 'Phương trình trên có vô số nghiệm';
      } else {
        tinhtoan = 'Phương trình trên vô nghiệm';
      }
    } else {
      tinhtoan = `Phương trình trên có nghiệm là x: ${Number(-b) / Number(a)}`;
    }
    navigation.navigate('Ketqua', {number: tinhtoan});
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          height: 75,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: 'black',
          borderWidth: 1,
        }}>
        <Text style={{alignContent: 'center', fontSize: 25, color: 'black'}}>
          Phương trình bậc 1
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        <TextInput
          style={{width: '80%', borderWidth: 1, padding: 10}}
          placeholder="Nhập a"
          onChangeText={handleInputA}
          keyboardType="numeric"
        />
        <TextInput
          style={{width: '80%', borderWidth: 1, padding: 10}}
          placeholder="Nhập b"
          onChangeText={handleInputB}
          keyboardType="numeric"
        />
        <Button title="Tính" onPress={handleOperator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
