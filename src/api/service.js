import {addResultAC, isLoadAC} from "../redux/cardsActions";
import axios from "axios";


export const getRepo = (search) => {
    if (search === '') {
        search = 'tetris'
    }
    return async dispatch => {
        dispatch(isLoadAC(true))
        try {

            const response = await axios.get(`https://api.github.com/search/repositories?q=${search}`)
            dispatch(addResultAC(response.data.items))

        } catch (e) {

        }
        dispatch(isLoadAC(false))
    }
}