import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList,Alert} from 'react-native';
import Header from './components/Header';
import { v4 as uuid } from 'uuid';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';

const App = () => {
  
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deletItem = (id) => {
    
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    }); 
  }


  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'})
    } else {
      
      setItems(prevItems => {
        return[{id: uuid(), text}, ...prevItems]
      })
    }
  }
  
  return (

    <View style={styles.container}>
      < Header />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({ item }) => (
           <ListItem item={item} deletItem={deletItem} />

        )}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    
  },
  
})
 
export default App;