import React from 'react';
import { View, Text, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListaScreen } from './screens/ListaScreen'
import { FetesScreen } from './screens/FetesScreen'
import { NuevaScreen } from './screens/NuevaScreen'


const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator tabBarOptions={tabsStyle}>
      <Tab.Screen name="Nueva" component={NuevaStackScreen} />
      <Tab.Screen name="Per fer" component={ListaStackScreen} />
      <Tab.Screen name="Acabades" component={FetesStackScreen} />
    </Tab.Navigator>
  )
}

const NuevaStack = createStackNavigator();
function NuevaStackScreen(){
  return (
    <ListaStack.Navigator screenOptions={headerStyle}>
      <ListaStack.Screen name="Nova Feina" 
      component={NuevaScreen} 
      options={{ 
        headerRight: () => (
          <Button onPress={() => alert("El boton")}
          title="Info"
          color="#fff"
          />
        )
      }}/>
    </ListaStack.Navigator>
  )
}
const ListaStack = createStackNavigator();
function ListaStackScreen() {
  return (
    <ListaStack.Navigator screenOptions={headerStyle}>
      <ListaStack.Screen name="Feines per fer" component={ListaScreen} />
    </ListaStack.Navigator>
  )
}

const FetesStack = createStackNavigator();
function FetesStackScreen() {
  return (
    <FetesStack.Navigator screenOptions={headerStyle}>
      <FetesStack.Screen name="Feines Acabades" component={FetesScreen} />
    </FetesStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs></MainTabs>
    </NavigationContainer>
  )
}

const headerStyle = ({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLayoutPreset: 'center'
});

const tabsStyle = ({
  activeTintColor: 'white',
  inactiveTintColor: 'white',
  activeBackgroundColor: 'gray',
  inactiveBackgroundColor: '#f4511e',
  labelStyle: {
    fontSize: 15,
    marginBottom: 10
  },
  style: {
    height: 50,
  }
})