import { INIT_LIST_ACTION, CHANGE_INPUT_VALUE } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getInitList = () => ({
    type: INIT_LIST_ACTION
})