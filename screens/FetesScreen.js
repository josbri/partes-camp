import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { Task } from '../components/task'
import { TaskList } from '../components/taskList';


export const FetesScreen = ({}) => {
  
  const tasks = [
    {
      Id: 2,
      Camp: "Caseta",
      Owner: "Pepe Bria",
      Description: "Polvorizar",
      Material: "400l Turbo",
      Hours: 2,
      Date: "25/05/2020", 
      Completed: true
    },
    {
      Id: 3,
      Camp: "Oliver",
      Owner: "Pepe Garcia",
      Description: "Segar",
      Material: "",
      Hours: 0,
      Date: "",
      Completed: false,
    },
  ]
  return (
    <TaskList 
      type={'Completed'}
      tasks={tasks}
      />
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
});