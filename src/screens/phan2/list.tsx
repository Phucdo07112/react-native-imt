import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function List({navigation}: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(0);
  const [arr, setArr] = useState([
    {
      id: 1,
      username: 'phucdo',
      email: 'phucdo0711@gmail.com',
    },
  ]);
  const [edit, setEdit] = useState(false);
  const [editingItem, setEditingItem] = useState({
    id: 0,
    username: '',
    email: '',
  });

  const editItem = () => {
    setEditingItem({id, username, email});
    console.log('edit', editingItem);

    const editedData = arr.map((item: any) => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          username: editingItem.username,
          email: editingItem.email,
        };
      }
      return item;
    });
    console.log('editedData', editedData);

    setArr(editedData);
    setUsername('');
    setEmail('');
    setEdit(false);
    setEditingItem({id: 0, username: '', email: ''});
  };

  const ItemU = (item: any) => {
    const username = item.item.username;
    const email = item.item.email;
    const handleEdit = (username: string, email: string, id: number) => {
      setUsername(username);
      setEmail(email);
      setEdit(true);
      setId(id);
      setEditingItem({id, username, email});
    };

    const handleDelete = (id: number) => {
      const newArr = arr.filter((item: any) => {
        return item.id !== id;
      });

      setArr(newArr);
    };
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 5,
        }}>
        <View style={{flex: 1, gap: 10}}>
          <Text>{username}</Text>
          <Text>{email}</Text>
        </View>
        <View style={{gap: 10}}>
          <Button
            title="Sửa"
            onPress={() => handleEdit(username, email, item.item.id)}
          />
          <Button title="Xóa" onPress={() => handleDelete(item.item.id)} />
        </View>
      </View>
    );
  };
  const handleClear = () => {
    setUsername('');
    setEmail('');
  };

  useEffect(() => {
    setEditingItem({id, username, email});
  }, [username, email, id]);

  const handleSave = () => {
    if (username.length > 0 && email.length > 0) {
      const newItem = {id: arr.length + 1, username, email};
      setArr([...arr, newItem]);
      handleClear();
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 2, borderWidth: 1, padding: 10, gap: 30}}>
        <TextInput
          style={{flex: 1, color: 'black', fontSize: 20, borderWidth: 1}}
          placeholder="Username"
          placeholderTextColor="black" // Màu chữ của placeholder
          keyboardType="default"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={{flex: 1, color: 'black', fontSize: 20, borderWidth: 1}}
          placeholder="Email"
          secureTextEntry={false} // Ẩn chữ và hiển thị dưới dạng *
          placeholderTextColor="black" // Màu chữ của placeholder
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Button title="Làm mới" onPress={handleClear} />
          {edit ? (
            <Button title="Edit" onPress={editItem} />
          ) : (
            <Button title="Lưu" onPress={handleSave} />
          )}
        </View>
      </View>
      <View style={{flex: 5, borderWidth: 1, padding: 10}}>
        <FlatList
          data={arr}
          renderItem={item => ItemU(item)}
          keyExtractor={(item: any) => item.id}
          numColumns={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
