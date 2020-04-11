import React, { useState, useReducer, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from "../constants/layout";
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'


export const NouCampScreen = ({ }) => {
  const clients = useSelector(state => state.taskReducer.clients)
  const camps = useSelector(state => state.taskReducer.camps)
  const [selectedOwner, setSelectedOwner] = useState(clients.length > 0 ? clients[0] : "");
  const [camp, setCamp] = useState("");
  
  useEffect(()=> {
    
  }, [selectedOwner])
  

  return (
    <SafeAreaView style={styles.container}>
      <Text> Selecciona un propietari... </Text>
      <Picker
        selectedValue={selectedOwner}
        style={styles.picker}
        prompt="Propietari"
        mode="dialog"
        onValueChange={(itemValue, itemIndex) => setSelectedOwner(itemValue)}
      >
        {clients.map((item) => {
          return (< Picker.Item label={item.name} value={item.id} key={item.id} />);
        })}
      </Picker>
      <TextInput value={camp} onChangeText={(camp) => setCamp(camp)} />
      <Button title="Anyadir"
      // onPress={}
      ></Button>
      <FlatList
        data={camps.filter(camp => camp.owner === selectedOwner.id)}
        renderItem={({item}) => <Item camp={item}/>}
        keyExtractor= {item => item.id}
        />
    </SafeAreaView>
  )

}

function Item({camp}) {
  return (
    <View>
      <Text>{camp.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  input: {
    width: Layout.window.width - 30,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 3,
    alignSelf: 'center'
  },
  picker: {
  }
});