import React, { useState } from 'react';
import {StyleSheet, Switch } from 'react-native';
import Layout from "../constants/layout";
import { useDispatch, useSelector } from 'react-redux'
import { Button, Picker, Label, Form, Item, Textarea, Container, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export function NuevaScreen({ navigation }) {
  const clients = useSelector(state => state.taskReducer.clients)
  const feines = useSelector(state => state.taskReducer.feines)
  const [selectedOwner, setSelectedOwner] = useState(clients.length > 0 ? clients[0] : "");
  const [selectedCamp, setSelectedCamp] = useState("");
  const [selectedFeina, setSelectedFeina] = useState(feines.length > 0 ? feines[0] : "");
  const [isFinished, setIsFinished] = useState(false);
  const toggleSwitch = () => setIsFinished(previousState => !previousState)

  return (
    <Container style={styles.container}>
      <Form>
        <Item style={styles.itemContainer}>
          <Label> Client:  </Label>
          <Picker
            selectedValue={selectedOwner}
            style={styles.picker}
            textStyle={styles.pickerText}
            prompt="Client"
            mode="dialog"
            onValueChange={(itemValue) => setSelectedOwner(itemValue)}
          >
            {clients.map((item) => {
              return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}
          </Picker>
        </Item>
        <Item style={styles.itemContainer}>
          <Label> Camp:  </Label>
          <Picker
            selectedValue={selectedCamp}
            style={styles.picker}
            textStyle={styles.pickerText}
            prompt="Camp"
            mode="dialog"
            onValueChange={(itemValue) => setSelectedCamp(itemValue)}
          >
            {selectedOwner.camps.map((item) => {
              return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}
          </Picker>
        </Item>
        <Item style={styles.itemContainer}>
          <Label> Feina:  </Label>
          <Picker
            selectedValue={selectedFeina}
            style={styles.picker}
            textStyle={styles.pickerText}
            prompt="Feina"
            mode="dialog"
            onValueChange={(itemValue) => setSelectedFeina(itemValue)}
          >
            {feines.map((item) => {
              return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}
          </Picker>
        </Item>
        <Item>
          <Textarea rowSpan={5} bordered placeholder="Comentaris:" style={styles.comment} />
        </Item>
        <Item style={styles.itemContainer}>
          <Label> Acabada:  </Label>
          <Switch
            value={isFinished}
            onValueChange={toggleSwitch}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </Item>

        <Button block rounded success style={styles.buttons}>
          <Text style={styles.buttontext}>GUARDAR</Text>
        </Button>
        <Button block rounded danger 
          style={styles.buttons}
          onPress={()=> navigation.goBack()}>
          <Text style={styles.buttontext}>CANCELAR</Text>
        </Button>


      </Form>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 20
  },
  itemContainer: {
    height: 70,
    fontSize: 100
  },
  pickerText: {
    fontSize: 200
  },
  comment: {
    width: '100%'
  },
  buttontext: {
    color: 'white',
  },
  buttons: {
    margin:10
  }


});
