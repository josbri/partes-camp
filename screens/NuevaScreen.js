import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import Layout from "../constants/layout";
import { SafeAreaView } from 'react-native-safe-area-context';

export function NuevaScreen({}) {
    const owners = [ "Juan Carlos", "Pepe Bria", "Josep Bria", "Benjamín"];
    const [selectedOwner, setSelectedOwner] = useState("");
    const [selectedCamp, setSelectedCamp] = useState("");
    const [selectedFeina, setSelectedFeina] = useState("");

    return(
      <SafeAreaView style={styles.container}>
        <Text> Selecciona un propietari... </Text>
          <Picker
            selectedValue={selectedOwner}
            style={styles.picker}
            prompt="Propietari"
            mode="dialog"
            onValueChange={(itemValue, itemIndex) => setSelectedOwner(itemValue)}
          >
            {owners.map((item, index) => {
                return (< Picker.Item label={item} value={index} key={index} />);
            })}   
          </Picker>
          <Text> Selecciona un camp... </Text>
          <Picker
            selectedValue={selectedCamp}
            style={styles.picker}
            prompt="Camp"
            mode="dialog"
            onValueChange={(itemValue, itemIndex) => setSelectedCamp(itemValue)}
          >
            {owners.map((item, index) => {
                return (< Picker.Item label={item} value={index} key={index} />);
            })}   
          </Picker>
          <Text> Selecciona una feina... </Text>
          <Picker
            selectedValue={selectedFeina}
            style={styles.picker}
            prompt="Feina"
            mode="dialog"
            onValueChange={(itemValue, itemIndex) => setSelectedFeina(itemValue)}
          >
            {owners.map((item, index) => {
                return (< Picker.Item label={item} value={index} key={index} />);
            })}   
          </Picker>
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
  