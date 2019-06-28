import { INIT_LIST_ACTION } from './actionTypes'
import { combineReducers } from 'redux'
import testReducer from '../common/Test/store/reducer'

const defaultState = {
    bbb: [1,1,1]
}

const mainReducer =  (state = defaultState, action) => {
    switch(action.type) {
        case INIT_LIST_ACTION:
            const initListValueState = JSON.parse(JSON.stringify(state))
            initListValueState.list = action.value.data.projects
            return initListValueState
        default: 
            return state
      }
    
}

export default combineReducers({
    test: testReducer,
    test2: mainReducer
})