import {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface MyProps {
    pin: any;
}
const Pin: React.FC<MyProps> = (props) => {
  const {uri} = props.pin;
  const [ratio, setRatio] = useState(1 / 2);

  useEffect(() => {
    if (uri) {
      Image.getSize(uri, (width, height) => setRatio(width / height));
    }
  }, [uri]);
  return (
    <View style={styles.item}>
      <Image source={{uri: uri}} style={(styles.image, {aspectRatio: ratio})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 350,
  },
});

export default Pin
