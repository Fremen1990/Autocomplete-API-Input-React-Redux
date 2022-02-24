import types from './types'

const INITIAL_STATE_USERS = {
    listName: 'Users',
    list: []
}

const INITIAL_STATE_INPUT = {
    listName: 'Input',
    list: ''
}



export const usersReducer = (state = INITIAL_STATE_USERS, action) => {
    switch (action.type) {
        case types.ADD_USERS:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.RESET_USERS:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export const inputReducer = (state = INITIAL_STATE_INPUT, action) => {
    switch (action.type) {
        case types.ADD_INPUT:
            return {
                ...state, list: [ action.item]
            }
        case types.RESET_INPUT:
            return {
                ...state, list: ""
            }
        default:
            return state
    }
}

