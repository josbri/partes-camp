import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Picker, Switch} from 'react-native';
import Layout from "../constants/layout";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux'

export function NuevaScreen({}) {
    const clients = useSelector(state => state.taskReducer.clients)
    const feines = useSelector(state => state.taskReducer.feines)
    const camps = useSelector(state => state.taskReducer.camps)
    const [selectedOwner, setSelectedOwner] = useState( clients.length > 0 ? clients[0] : "");
    const [selectedCamp, setSelectedCamp] = useState("");
    const [selectedFeina, setSelectedFeina] = useState(feines.length > 0 ? feines[0] : "");
    const [isFinished, setIsFinished] = useState(false);
    const toggleSwitch = () => setIsFinished(previousState => !previousState)

    return(
      <SafeAreaView style={styles.container}>
        <Text> Selecciona un client... </Text>
          <Picker
            selectedValue={selectedOwner}
            style={styles.picker}
            prompt="Client"
            mode="dialog"
            onValueChange={(itemValue) => setSelectedOwner(itemValue)}
          >
            {clients.map((item) => {
                return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}   
          </Picker>
          <Text> Selecciona un camp... </Text>
          <Picker
            selectedValue={selectedCamp}
            style={styles.picker}
            prompt="Camp"
            mode="dialog"
            onValueChange={(itemValue) => setSelectedCamp(itemValue)}
          >
            {camps.filter(camp => camp.owner === selectedOwner.id).map((item) => {
                return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}   
          </Picker>
          <Text> Selecciona una feina... </Text>
          <Picker
            selectedValue={selectedFeina}
            style={styles.picker}
            prompt="Feina"
            mode="dialog"
            onValueChange={(itemValue) => setSelectedFeina(itemValue)}
          >
            {feines.map((item) => {
                return (< Picker.Item label={item.name} value={item} key={item.id} />);
            })}   
          </Picker>
          <Text> Feta: </Text>
          <Switch
            value={isFinished}
            onValueChange={toggleSwitch}
          />
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
    }
  });
  