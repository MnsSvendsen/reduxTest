import C from '../constants'

export const  goal = ( state, action ) => {

    if (action.type === C.SET_GOAL){
        return parseInt(action.paylode)
    } else {
        return state
    }
}