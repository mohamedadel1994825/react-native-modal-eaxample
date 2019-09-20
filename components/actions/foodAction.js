import {NEW_FOOD} from '../actions/types'
export const addFood=(food)=>(dispatch)=>{
    dispatch({
        type:NEW_FOOD,
        payload:food
    })
}