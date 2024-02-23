import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Nav1({navigation}:any) {
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
          Toán Học
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          margin: 20,
          flex: 1,
          gap: 20,
        }}>
        <View style={{borderWidth: 1, padding: 15, borderRadius: 5}}>
          <Text
            style={{fontSize: 25}}
            onPress={() => navigation.navigate('Operator')}>
            Cộng Trừ Nhân Chia
          </Text>
        </View>
        <View style={{borderWidth: 1, padding: 15, borderRadius: 5}}>
          <Text
            style={{fontSize: 25}}
            onPress={() => navigation.navigate('Bac1')}>
            Phương trình bậc 1
          </Text>
        </View>
        <View style={{borderWidth: 1, padding: 15, borderRadius: 5}}>
          <Text
            style={{fontSize: 25}}
            onPress={() => navigation.navigate('Bac2')}>
            Phương trình bậc 2
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
