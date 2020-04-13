import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from "../constants/layout";
import { useDispatch, useSelector } from 'react-redux'
import { Button, Picker, Label, Form, Item, Input, List, ListItem, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export const NouCampScreen = ({ }) => {
  //Redux:
  const clients = useSelector(state => state.taskReducer.clients)
  //Hooks
  const [selectedClient, setselectedClient] = useState(clients.length > 0 ? clients[0] : "");
  const [newCamp, setNewCamp] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Form>
        <Item>
          <Label> Client:  </Label>
          <Picker
            selectedValue={selectedClient}
            style={styles.picker}
            placeholder="Selecciona el client..."
            placeholderStyle={{ color: "#bfc6ea" }}
            prompt="Client"
            mode="dialog"
            onValueChange={(itemValue, itemIndex) => {
              setselectedClient(itemValue)
            }}
          >
            {clients.map((item) => {
              return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}
          </Picker>
        </Item>
        <Item regular>
          <Label> Nou Camp: </Label>
          <Input placeholder="Nou camp..." value={newCamp} onChangeText={(text) => setNewCamp(text)} />
          <Icon name="ios-add" size={40} />
        </Item>
      </Form>

      <List
        data={selectedClient.camps}
        keyExtractor={item => item.id}
      >
        {selectedClient.camps.map((item) => {
          return (< ListItem icon value={item} key={item.id}>
            <Body>
              <Text>{item.name}</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="ios-trash" size={25}></Icon>
              </Button>
            </Right>
          </ ListItem>);
        })}
      </List>
    </SafeAreaView>
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
  },

});