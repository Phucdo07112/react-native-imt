import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Main({navigation, item}: any) {
  return (
    <View
      style={{
        marginRight: 10,
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: 'white',
        height: 130,
        margin: 10,
      }}>
      <Image
        source={item}
        style={{
          height: '100%',
          width: 100,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <View style={{padding: 10, width: '100%', gap: 10}}>
        <View style={{flexDirection: 'row', gap: 4}}>
          {item.tag.map((tg: any) => (
            <Text style={{color: '#3da9fc'}}>#{tg}</Text>
          ))}
        </View>

        <Text style={{fontSize: 15, fontWeight: '500'}}>{item.title}</Text>
        <Text style={{width: '80%'}}>
          if you are looking to keep up with the buzz around th scuba...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
