// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bai1 from './src/screens/bai1';
import Bai2 from './src/screens/bai2';
import Bai3 from './src/screens/bai3';
import Bai4 from './src/screens/bai4';
import Nav1 from './src/screens/phan2/nav1';
import Operator from './src/screens/phan2/operator';
import Bac1 from './src/screens/phan2/bac1';
import Bac2 from './src/screens/phan2/bac2';
import Ketqua from './src/screens/phan2/ketqua';
import List from './src/screens/phan2/list';
import {Dropdown} from 'react-native-element-dropdown';
import Travel from './src/screens/phan2/travel';

function HomeScreen({navigation}: any) {
  const [value, setValue] = React.useState<string | null>(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [isBtn, setIsBtn] = React.useState(false);
  const data = [
    {label: 'Bai1', value: 'Bai1'},
    {label: 'Bai2', value: 'Bai2'},
    {label: 'Bai3', value: 'Bai3'},
    {label: 'Bai4', value: 'Bai4'},
    {label: 'Nav1', value: 'Nav1'},
    {label: 'Bac1', value: 'Bac1'},
    {label: 'Bac2', value: 'Bac2'},
    {label: 'Operator', value: 'Operator'},
    {label: 'List', value: 'List'},
    {label: 'Travel', value: 'Travel'},
  ];

  const renderLabel = () => {
    if (isBtn) {
      navigation.navigate(value);
      setIsBtn(false);
    }
    return null;
  };

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Nav1');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>WelCome</Text>
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
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Button title="GO TO PAGE" onPress={() => setIsBtn(true)} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
        <Stack.Screen name="Bai4" component={Bai4} />
        <Stack.Screen name="Nav1" component={Nav1} />
        <Stack.Screen name="Bac1" component={Bac1} />
        <Stack.Screen name="Bac2" component={Bac2} />
        <Stack.Screen name="Operator" component={Operator} />
        <Stack.Screen name="Ketqua" component={Ketqua} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Travel" component={Travel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
