import React from 'react';
import { View, FlatList, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Task } from '../components/task'
import { Button, Text, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = ({ navigation, title }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.header}>
            <Text style={styles.headerText} >
                    {title}
                </Text>
                <Image style={styles.headerImage} source={require('../shared/icons/tractor.png')}></Image>
                
            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        paddingTop: 4,
        height: 80
    },
    headerImage: {
        height: 80,
        resizeMode: "contain"
    },
    headerText: {
        fontSize: 30,
        color: "black",
        fontFamily: 'space-mono',
    }
});