import React from 'react';
import {View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const NouSeleccioScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Nou Client"
                onPress={() => navigation.navigate('Nou Client')}
            />
             <Button
                title="Nou Camp"
                onPress={() => navigation.navigate('Nou Camp')}
            />
        </View>
    )
}