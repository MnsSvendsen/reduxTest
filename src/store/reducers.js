import C from '../constants'

export const  goal = ( state, action ) => 
    (action.type === C.SET_GOAL) ?
        parseInt(action.paylode):
        state

        export const  skiDay = ( state, action ) => 
    (action.type === C.SET_DAY) ?
        action.paylode:
        state


