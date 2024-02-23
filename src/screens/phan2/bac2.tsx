import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Bac2({navigation}: any) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

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

  const handleInputC = (text: string) => {
    // Kiểm tra nếu không phải là số
    if (!/^\d+$/.test(text) && text.length > 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập vào một số.');
      return;
    }

    // Nếu là số, cập nhật giá trị
    setC(text);
  };

  const handleOperator = () => {
    let tinhtoan = '';
    let delta = Number(b) * Number(b) - 4 * Number(a) * Number(c);
    if (delta < 0) {
      tinhtoan = 'Phương trình đã cho vô nghiệm';
    } else if (delta === 0) {
      tinhtoan = `Phương trình đã cho Nghiệm Kép ${
        Number(-b) / (2 * Number(a))
      }`;
    } else if(delta > 0) {
      const x1 = (Number(-b) + Math.sqrt(delta)) / (2 * Number(a));
      const x2 = (Number(-b) - Math.sqrt(delta)) / (2 * Number(a));
      tinhtoan = `Phương trình đã cho 2 nghiệm phân biệt ${x1} và ${x2}`;
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
        <TextInput
          style={{width: '80%', borderWidth: 1, padding: 10}}
          placeholder="Nhập c"
          onChangeText={handleInputC}
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
