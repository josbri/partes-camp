import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { Task } from '../components/task'


export const TaskList = ({type, tasks}) => {
    const getVisibletasks = (tasks, type) => {
        switch (type){
            case 'Completed':
                return tasks.filter((t) => t.Completed);
            case 'NotCompleted':
                return tasks.filter((t) => !t.Completed);
        }
    }

    tasks = getVisibletasks(tasks, type);

    return (
      <View style={styles.container}>
        <FlatList 
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
      </View>
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
