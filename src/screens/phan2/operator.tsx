import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default function Operator({navigation}: any) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const data = [
    {label: 'Cộng', value: '+'},
    {label: 'Trừ', value: '-'},
    {label: 'Nhân', value: '*'},
    {label: 'Chia', value: '/'},
  ];

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

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
    let tinhtoan = 0;
    if (value === '+') {
      tinhtoan = Number(a) + Number(b);
    } else if(value === '-') {
      tinhtoan = Number(a) - Number(b);
    } else if(value === '*') {
      tinhtoan = Number(a) * Number(b);
    } else if(value === '/') {
      tinhtoan = Number(a) / Number(b);
    } else {
      return false
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
          Cộng trừ nhân chia
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <TextInput
          style={{width: '80%', borderWidth: 1, padding: 10}}
          placeholder="Nhập a"
          onChangeText={handleInputA}
          keyboardType="numeric"
        />
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
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
    backgroundColor: 'white',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '80%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
