import {usersReducer} from './users/duck/reducers'
import {inputReducer} from './users/duck/reducers'

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    users: usersReducer,
    input: inputReducer,
})

export default rootReducer;
