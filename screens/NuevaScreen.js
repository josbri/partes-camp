import React from 'react';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import Layout from "../constants/layout";
import { SafeAreaView } from 'react-native-safe-area-context';

export function NuevaScreen() {
    return(
      <SafeAreaView style={styles.container}>
          <Formik
            initialValues={{ Owner: "" }}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
            
          >
            {formikProps => (
              <React.Fragment>
              <TextInput 
                style={styles.input}
                onChangeText={formikProps.handleChange("Owner")}
              />
              <Button title="Guardar" onPress={formikProps.handleSubmit}/>
              <Button title="Cancelar" />
              </React.Fragment>
            )}
          </Formik>
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

  });
  