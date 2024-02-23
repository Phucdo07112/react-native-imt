import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
export default function Ketqua({navigation}: any) {
  const route = useRoute<any>();
  const numberParam = route.params?.number;
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
          Kết quả
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: 'black'}}>
          Kết quả là: {numberParam}
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
