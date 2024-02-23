import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ButtonExpoProps {
  text: string;
  background: string;
}
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

export default function Bai3() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          flexDirection: 'column-reverse',
          alignItems: 'flex-end',
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
          }}>
          0
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: 'black',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 1,
        }}>
        <ButtonExpo text="AC" background="#A5A5A5" />
        <ButtonExpo text="+/-" background="#A5A5A5" />
        <ButtonExpo text="%" background="#A5A5A5" />
        <ButtonExpo text="/" background="orange" />
        <ButtonExpo text="7" background="#333333" />
        <ButtonExpo text="8" background="#333333" />
        <ButtonExpo text="9" background="#333333" />
        <ButtonExpo text="x" background="orange" />
        <ButtonExpo text="4" background="#333333" />
        <ButtonExpo text="5" background="#333333" />
        <ButtonExpo text="6" background="#333333" />
        <ButtonExpo text="-" background="orange" />
        <ButtonExpo text="1" background="#333333" />
        <ButtonExpo text="2" background="#333333" />
        <ButtonExpo text="3" background="#333333" />
        <ButtonExpo text="+" background="orange" />
        <ButtonExpo text="0" background="#333333" />
        <ButtonExpo text="." background="#333333" />
        <ButtonExpo text="=" background="orange" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
