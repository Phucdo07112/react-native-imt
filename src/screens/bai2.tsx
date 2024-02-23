import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Bai2() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'yellow',
          width: 350,
          height: 350,
          flexDirection: 'row-reverse',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: 275,
            height: 275,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: 'orange',
              width: 100,
              height: 100,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{backgroundColor: 'green', width: 25, height: 25}}></Text>
            <Text
              style={{backgroundColor: 'pink', width: 25, height: 25}}></Text>
          </View>
          <Text
            style={{backgroundColor: 'pink', width: 100, height: 100}}></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
