import { ADD_TASK, REMOVE_TASK } from './actions'

const initialState = {
    tasks: [{
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
    {
        Id: 4,
        Camp: "Caseta",
        Owner: "Pepe Bria",
        Description: "Polvorizar",
        Material: "400l Turbo",
        Hours: 2,
        Date: "25/05/2020", 
        Completed: true
      },
      {
        Id: 5,
        Camp: "Oliver",
        Owner: "Pepe Garcia",
        Description: "Segar",
        Material: "",
        Hours: 0,
        Date: "",
        Completed: false,
      },
    ],
    owners: [ {id: 1, name: "Juan Carlos"}, {id: 2, name: "Pepe Bria"}, {id: 3, name: "Josep Bria"}],
    camps: [ {id: 1, owner: 1, name: "Caseta"}, {id: 2, owner: 2, name: "Caseta Pelaet"},
     {id: 3, owner: 3, name: "Caseta Bria"}]

  }
  
  const taskReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_TASK:
        return {
          tasks: [
            ...state.tasks,
            action.task
          ]
        }
      case REMOVE_TASK:
        const index = state.tasks.findIndex(task => task.id === action.task.id)
        return {
          tasks: [
            ...state.tasks.slice(0, index),
            ...state.tasks.slice(index + 1)
          ]
        }
  
        case FILTER_TASK:
            return action.filter
      default:
        return state
    }
  }
  
  export default taskReducer