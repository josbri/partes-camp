import React from 'react';
import { StyleSheet, FlatList, Item } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Container, List, Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export const ClientScreen = ({ navigation }) => {
    const clients = useSelector(state => state.taskReducer.clients)
    console.log(clients)
    return (
        <Container style={styles.container}>
            <FlatList
                data={clients}
                style={styles.list}
                ItemSeparatorComponent= {FlatListItemSeparator}
                renderItem={({ item }) => (
                    <ClientItem
                        id={item.id}
                        client={item}
                    />
                )}
                keyExtractor={(item => String(item.id))}
                ListEmptyComponent={ListEmpty}
                
            />
        </Container>
    )
}

function ClientItem({ client }) {
    return (
        <TouchableOpacity
            onPress={() => alert("Pressed")}
            style={styles.clientItem}
        >
            <TouchableOpacity style={styles.cercleInicial}>
                <Text style={styles.cercleInicialText}> {client.name.charAt(0)}</Text>
            </TouchableOpacity>
            <Text style={styles.text}> {client.name} </Text>
        </TouchableOpacity>
    )
}

function ListEmpty(){
    return (
        <Text>
            "No s'han pogut carregar els clients"
        </Text>
    )
}

function FlatListItemSeparator (){
    return (
      <Container
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "red",
        }}
      />
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    clientItem: {
        flexDirection: "row",
        margin: 5,
        padding: 10,
        alignItems: "flex-start",
        
        //backgroundColor: "#DDDDDD"
    },
    text: {
        fontSize: 20,
        padding: 10,
        alignSelf: "center"
    },
    cercleInicial: {
        borderRadius: 22.5,
        backgroundColor: "#333",
        width: 45,
        height: 45,
        alignItems: "center"
    },
    cercleInicialText: {
        fontSize: 33,
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        padding: 0
    }
});