import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Bai1() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row'}}>
        <Text style={{backgroundColor: 'blue', flex: 1}}></Text>
        <Text style={{backgroundColor: 'yellow', flex: 1}}></Text>
      </View>
      <Text style={{backgroundColor: 'red', flex: 1}}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
