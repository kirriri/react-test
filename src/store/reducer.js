import { CHANGE_INPUT_VALUE, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
    value: 'test',
    bbb: [1,1,1]
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
            const changeValueState = JSON.parse(JSON.stringify(state))
            changeValueState.value = action.value
            return changeValueState
        case INIT_LIST_ACTION:
            const initListValueState = JSON.parse(JSON.stringify(state))
            initListValueState.list = action.value.data.projects
            return initListValueState
        default: 
            return state
      }
    
}