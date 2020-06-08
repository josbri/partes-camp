import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Task } from '../components/task'
import { Button, Text, Container, List, Layout } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

export const TaskList = ({ type, tasks, navigation }) => {
  const getVisibletasks = (tasks, type) => {
    switch (type) {
      case 'Completed':
        return tasks.filter((t) => t.Completed);
      case 'NotCompleted':
        return tasks.filter((t) => !t.Completed);
    }
  }
  tasks = getVisibletasks(tasks, type);

  return (
    <Layout style={styles.container}>
      <List
        style={styles.flatlist}
        scrollEventThrottle={1}
        data={tasks}
        renderItem={({ item }) =>
          <Task
            id={item.id}
            task={item}
            type={type} />
        }
        keyExtractor={(item => String(item.Id))}
      />
      <View style={styles.buttoncontainer}>
        <Button rounded style={styles.addbutton}
          onPress={() => navigation.navigate("New")}
        >
          <Icon name="ios-add" size={55} style={{padding: 10, color: "white"}} ></Icon>
        </Button>
      </View>
    </Layout>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttoncontainer: {
    alignSelf: "flex-end",
    margin: 20
  },
  addbutton: {
    alignContent: "space-between",
    justifyContent: "center",
    
  }
});
