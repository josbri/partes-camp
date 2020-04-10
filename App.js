import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListaScreen } from './screens/ListaScreen'
import { FetesScreen } from './screens/FetesScreen'
import { NuevaScreen } from './screens/NuevaScreen'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NouClientScreen } from './screens/NouClientScreen';
import { NouCampScreen } from './screens/NouCampScreen';
import { NouSeleccioScreen } from './screens/NouSeleccioScreen';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

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

const Drawer = createDrawerNavigator();
function SettingsDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Nou Client"
        component={NouClientScreen} />
      <Drawer.Screen name="Nou Camp"
        component={NouCampScreen} />
    </Drawer.Navigator>
  )
}


const NuevaStack = createStackNavigator();
function NuevaStackScreen({ navigation }) {
  return (
    <NuevaStack.Navigator screenOptions={headerStyle}>
      <NuevaStack.Screen name="Nova Feina"
        component={NuevaScreen}
        options={drawerButton(navigation)} />
      <NuevaStack.Screen name="SeleccioClientsCamps"
        component={NouSeleccioScreen}
      />
      <NuevaStack.Screen name="Nou Client"
        component={NouClientScreen}
      />
      <NuevaStack.Screen name="Nou Camp"
        component={NouCampScreen}
      />
    </NuevaStack.Navigator>
  )
}
const ListaStack = createStackNavigator();
function ListaStackScreen({ navigation }) {
  return (
    <ListaStack.Navigator screenOptions={headerStyle}>
      <ListaStack.Screen name="Feines per fer" component={ListaScreen}
        options={drawerButton(navigation)} />
    </ListaStack.Navigator>
  )
}

const FetesStack = createStackNavigator();
function FetesStackScreen({ navigation }) {
  return (
    <FetesStack.Navigator screenOptions={headerStyle}>
      <FetesStack.Screen name="Feines Acabades" component={FetesScreen}
        options={drawerButton(navigation)} />
    </FetesStack.Navigator>
  )
}


//STORE 

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs></MainTabs>
      </NavigationContainer>
    </Provider>

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


const styles = ({
  icon: {
    tintColor: 'white',
  }
})

function drawerButton(navigation) {
  return ({
    headerLeft: ({ }) => (
      <TouchableHighlight onPress={() => navigation.navigate('SeleccioClientsCamps')}>
        <Image
          style={styles.icon}
          source={require('./shared/icons/personAdd.png')}
        />
      </TouchableHighlight>
    )
  })
}