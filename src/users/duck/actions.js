import  types from './types';

const addUsers = item =>({
    type:types.ADD_USERS, item
});

const resetUsers = item =>({
    type:types.RESET_USERS, item
})

const addInput = item =>({
    type:types.ADD_INPUT, item
})

const resetInput = item =>({
    type:types.RESET_INPUT, item
})

export default {
    addUsers,
    resetUsers,
    addInput,
    resetInput,

}
