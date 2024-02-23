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

export default function Banner({navigation, item}: any) {
  console.log(item);

  return (
    <View style={{marginRight: 10, position: 'relative'}}>
      <Image
        source={item}
        style={{width: 380, height: 250, borderRadius: 20}}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.6)']}
        style={{
          position: 'absolute',
          padding: 16,
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          borderRadius: 20,
        }}
      />
      <View
        style={{
          zIndex: 10,
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          padding: 30,
        }}>
        <Text
          style={{
            marginBottom: 80,
            fontSize: 20,
            fontWeight: '800',
            color: 'white',
          }}>
          Trending
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          {item.tag.map((tg: any) => (
            <Text
              style={{
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: 10,
                borderRadius: 10,
              }}>
              #{tg}
            </Text>
          ))}
        </View>
        <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>
          {item.title}
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
