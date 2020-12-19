import UserService from "../../services/user.service"
import { GET_USER } from "./actions.types"

export const getUser = () => async (dispatch) => {
    try {
        const {data} = await UserService.getUser()
        dispatch({
            type: GET_USER,
            payload: data
        })
    } catch (error) {
        console.log(error, 'error')
    }
}