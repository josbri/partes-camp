import React from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
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
import { DrawerActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawer/>
      </NavigationContainer>
    </Provider>
  )
}

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
function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="MainTabs"
    //drawerContent={props => CustomDrawerContent(props)}
    screenOptions={headerStyle}
    >
      <Drawer.Screen name="MainTab" component={MainTabs} />
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
    <NuevaStack.Navigator initialRouteName="Nova Feina" screenOptions={headerStyle}>
      <NuevaStack.Screen name="Nova Feina"
        component={NuevaScreen}
        options={drawerButton(navigation)} />
    </NuevaStack.Navigator>
  )
}
const ListaStack = createStackNavigator();
function ListaStackScreen({ navigation }) {
  return (
    <ListaStack.Navigator initialRouteName="Feines per fer" screenOptions={headerStyle}>
      <ListaStack.Screen name="Feines per fer" component={ListaScreen}
        options={drawerButton(navigation)} />
    </ListaStack.Navigator>
  )
}

const FetesStack = createStackNavigator();
function FetesStackScreen({ navigation }) {
  return (
    <FetesStack.Navigator initialRouteName="Feines Acabades" screenOptions={headerStyle}>
      <FetesStack.Screen name="Feines Acabades" component={FetesScreen}
        options={drawerButton(navigation)} />
    </FetesStack.Navigator>
  )
}
 

const store = createStore(rootReducer);

function drawerButton(navigation) {
  return ({
    headerLeft: ({ }) => (
      <TouchableHighlight onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.icon}
          source={require('./shared/icons/menu.png')}
        />
      </TouchableHighlight>
    )
  })
}


// function CustomDrawerContent(props){
//   return (
//     <SafeAreaView style={styles.DrawerStyle}>
//         <ScrollView>
//         </ScrollView>
//     </SafeAreaView>
//   )
// }

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
  },
  DrawerStyle: {
    flex: 1, 
    backgroundColor: 'red'
  }
})

