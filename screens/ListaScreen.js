import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { Task } from '../components/task'
import { TaskList } from '../components/taskList';
import {useDispatch, useSelector} from 'react-redux'


export const ListaScreen = ({}) => {
  
  const tasks = useSelector(state => state.taskReducer.tasks)
  console.log(tasks)

  return (
    <TaskList 
      type={'NotCompleted'}
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