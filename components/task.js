import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Layout from "../constants/layout";

export const Task = ({ task }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={task.Completed && true ? 
                styles.cardCompleted : styles.cardNotCompleted}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.label}>
                            {task.Description} {task.Camp} 
                        </Text>
                        <Text style={styles.content}>
                            {task.Owner} 
                            { task.Completed == true &&
                                <Text style={styles.content}>
                                    {'\n'}
                                    {task.Date} - {task.Hours} hores. {'\n'}
                                    {task.Material}
                                </Text>
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardNotCompleted: {
        width: Layout.window.width - 30,
        height: 80,
        marginBottom: 10,
        backgroundColor: "#eeebfa",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardCompleted: {
        width: Layout.window.width - 30,
        height: 120,
        marginBottom: 10,
        backgroundColor: "#eeebfa",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    contentContainer: {
        marginTop: 5,
        padding: 10,
        display: "flex",
        //flexDirection: "row",
        justifyContent: "space-between"
    },
    content: {
        fontSize: 16,
        paddingBottom: 10,
        fontFamily: 'space-mono'
    },
    label: {
        fontSize: 20,
        fontWeight: "700",
    }
})