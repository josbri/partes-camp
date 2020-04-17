import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Layout from "../constants/layout";
import { Content, Card, CardItem, Body , Button} from 'native-base';
export const Task = ({ task }) => {
    return (
        <Content padder>
            <Card style={styles.container}>
                <CardItem header bordered>
                    <Text style={styles.label}>
                        {task.Description} {task.Camp}
                    </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                    <Text style={styles.content}>
                            {task.Owner}
                            {task.Completed == true &&
                                <Text style={styles.content}>
                                    {'\n'}
                                    {task.Date} - {task.Hours} hores. {'\n'}
                                    {task.Material}
                                </Text>
                            }
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Button>
                        <Text>Feta</Text>
                    </Button>
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