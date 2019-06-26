import { CHANGE_INPUT_VALUE } from './actionTypes'

const defaultState = {
    value: 'test',
    bbb: [1,1,1]
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
            const newState = JSON.parse(JSON.stringify(state))
            newState.value = action.value
            return newState
        default: 
            return state
      }
    
}