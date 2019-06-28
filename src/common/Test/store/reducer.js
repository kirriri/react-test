import { CHANGE_INPUT_VALUE } from '../../../store/actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    value: 'test',
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
            // const changeValueState = JSON.parse(JSON.stringify(state))
            // changeValueState.value = action.value
            return state.set('value', action.value)
        default:
            return state
    }
}