import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { Task } from '../components/task'
import { TaskList } from '../components/taskList';
import {useDispatch, useSelector} from 'react-redux'

export const FetesScreen = ({}) => {
  const tasks = useSelector(state => state.taskReducer.tasks)

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