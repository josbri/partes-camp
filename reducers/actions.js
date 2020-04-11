export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const FILTER_TASK = 'FILTER_TASK'
export const ADD_CAMP = 'ADD_CAMP'
export const ADD_CLIENT = 'ADD_CLIENT'


export function addTask(task) {
    return {
        type: ADD_TASK,
        task
    }
}

export function removeTask(task) {
    return {
        type: REMOVE_TASK,
        task
    }
}

export function filterTask(filter) {
    return {
        type: FILTER_TASK,
        filter
    }
}

export function addCamp(camp) {
    return {
        type: ADD_CAMP,
        camp
    }
}

export function addClient(client) {
    return {
        type: ADD_CLIENT,
        client
    }
}