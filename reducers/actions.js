export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const FILTER_TASK = 'FILTER_TASK'
import uuidV4 from 'uuid/v4'


export function addTask (task) {
    return {
        type: ADD_TASK,
        task: {
            ...task,
            id: uuidV4()
        }
    }
}

export function removeTask (task) {
    return {
        type: REMOVE_TASK,
        task
    }
}

export function filterTask (filter) {
    return {
        type: FILTER_TASK,
        filter
    }
}