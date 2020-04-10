import React, {useState, useReducer} from 'react';
import {View, Button, Text, StyleSheet, Picker} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from "../constants/layout";
import { TextInput } from 'react-native-gesture-handler';

export const NouCampScreen = ({}) => {
    const owners = [ "Juan Carlos", "Pepe Bria", "Josep Bria", "Benjamín"];

    const [selectedOwner, setSelectedOwner] = useState("");
    const [camp, setCamp] = useState("");

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
            {owners.map((item, index) => {
                return (< Picker.Item label={item} value={index} key={index} />);
            })}   
          </Picker>
        
        <TextInput value={camp} onChangeText={(x) => setCamp(x)} />

        <Button title="Anyadir"
               // onPress={}
        ></Button>

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