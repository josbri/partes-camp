import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Button, ListItem, Body, Right, Container, Text, List, Form, Item, Label, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export const NovaFeinaScreen = ({ }) => {
    const feines = useSelector(state => state.taskReducer.feines)
    //const [selectedFeina, setSelectedFeina] = useState(feines.length > 0 ? feines[0] : "");
    const [newFeina, setNewFeina] = useState("");
    return (
        <Container style={styles.Container}>
            <Container style={styles.inputContainer}>
                <Form>
                    <Item>
                        <Label>Nova Feina:</Label>
                        <Input placeholder="Nova feina.." value={newFeina} onChangeText={(text) => setNewFeina(text)} />
                        <Icon name="ios-add" size={40} />
                    </Item>
                </Form>
            </Container>
            <Container style={styles.listContainer}>
                <List 
                    style={styles.list}
                    data={feines}
                    keyExtractor={item => item.id}
                >
                    {feines.map((item) => {
                        return (< ListItem icon value={item} key={item.id} style={styles.listItem}>
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
            </Container>
        </Container>

    )

}

const styles = StyleSheet.create({
    Container: {
        padding: 10,
        paddingRight: 20
    },
    inputContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 2,
        width: "100%"
    },
    list: {
       alignSelf: "center"
    },
    listItem:{
        height: 50,
        width: "100%",
    }

});