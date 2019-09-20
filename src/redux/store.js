import {createStore} from "redux" 

// INITIAL STATE
const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
}

// ACTION CONSTANTS
export const CANCEL = "CANCEL"
export const STEP_ONE = "STEP_ONE"
export const STEP_TWO = "STEP_TWO"



// REDUCER FUNCTION
function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case STEP_ONE: {
            return{
                ...state,
                name: payload.name,
                address: payload.address,
                city: payload.city,
                state: payload.state,
                zip: payload.zip
            }
        }
         case CANCEL: {
             return {
                 name: '',
                 address: '',
                 city: '',
                 state: '',
                 zip: ''
             }
         }

        default:
            return state
    }
}


export default createStore(reducer)