import actions from "./actions";
import axios from "axios";

const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response;
}

export const getAllUsers = () =>
    async (dispatch) => {
        const users = await fetchUsers()
        users.data.map(user => dispatch(actions.addUsers(user.username)))
    }

