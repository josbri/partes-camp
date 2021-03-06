import { ADD_TASK, REMOVE_TASK, FILTER_TASK, ADD_CAMP, ADD_CLIENT } from './actions'

const initialState = {
  tasks: [{
    Id: 2,
    Camp: "Caseta",
    Owner: "Pepe Bria",
    Description: "Polvorizar",
    Material: "400l Turbo",
    Hours: 2,
    Date: "25/05/2020",
    Completed: true,
  },
  {
    Id: 3,
    Camp: "Espadilla",
    Owner: "Pepe Cabudete",
    Description: "Segar",
    Material: "",
    Hours: 0,
    Date: "",
    Completed: false,
  },
  {
    Id: 4,
    Camp: "Caseta",
    Owner: "Benjamin",
    Description: "Polvorizar",
    Material: "400l Turbo",
    Hours: 2.5,
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
  clients: [{ id: 1, name: "Juan Carlos", camps: [{ id: 1, owner: 1, name: "Caseta" }] },
   { id: 2, name: "Pepe Bria", camps:[{ id: 2, owner: 2, name: "Caseta Pelaet" }] }, 
   { id: 3, name: "Josep Bria", camps: [{ id: 3, owner: 3, name: "Caseta Bria" },{ id: 4, owner: 3, name: "Caseta Bria 2" },
   { id: 5, owner: 3, name: "Caseta Bria 3" }]}],
  feines: [{id: 1, name: "Polvoritzar Tanque"}, {id: 2, name: "Polvoritzar Manguera"}, 
  {id: 3, name: "Herbicida Motxilla"}, {id: 4, name: "Herbicida Tractor"}, {id: 5, name: "Revisar Goteo"},
  {id: 6, name: "Picar"}]

}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
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


    case ADD_CAMP: 
      return {
        camps: [
          ...state.camps,
          action.camp
        ]
      }

    case ADD_CLIENT:
      return {
        clients: [
          ...state.clients,
          action.client
        ]
      }
    default:
      return state
  }
}

export default taskReducer