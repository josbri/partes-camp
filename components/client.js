import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Body, Button } from 'native-base';

export const Client = ({ client, campsClient, tasksClient }) => {
    return (
        <Content padder>
            <Card style={styles.container}>
                <CardItem header bordered>
                    <Text style={styles.label}>
                        {client.Name}
                    </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <List
                            style={styles.list}
                            data={campsClient}
                            keyExtractor={item => item.id}
                        ></List>
                    </Body>
                </CardItem>
                    <CardItem footer bordered>
                    </CardItem>
            </Card>
        </Content>
    )
}

const styles = StyleSheet.create({
                // container: {
                //     flex: 1,
                //     alignItems: 'center',
                //     justifyContent: 'center',
                // },
                // cardNotCompleted: {
                //     width: Layout.window.width - 30,
                //     height: 80,
                //     marginBottom: 10,
                //     backgroundColor: "#eeebfa",
                //     shadowColor: "#000",
                //     shadowOffset: {
                //         width: 0,
                //         height: 4,
                //     },
                //     shadowOpacity: 0.30,
                //     shadowRadius: 4.65,
                //     elevation: 8,
                // },
                // cardCompleted: {
                //     width: Layout.window.width - 30,
                //     height: 120,
                //     marginBottom: 10,
                //     backgroundColor: "#eeebfa",
                //     shadowColor: "#000",
                //     shadowOffset: {
                //         width: 0,
                //         height: 4,
                //     },
                //     shadowOpacity: 0.30,
                //     shadowRadius: 4.65,
                //     elevation: 8,
                // },
                // contentContainer: {
                //     marginTop: 5,
                //     padding: 10,
                //     display: "flex",
                //     //flexDirection: "row",
                //     justifyContent: "space-between"
                // },
                // content: {
                //     fontSize: 16,
                //     paddingBottom: 10,
                //     fontFamily: 'space-mono'
                // },
                // label: {
                //     fontSize: 20,
                //     fontWeight: "700",
                // }
            })