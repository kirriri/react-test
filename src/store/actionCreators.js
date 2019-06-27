import { GET_INIT_LIST_ACTION, INIT_LIST_ACTION, CHANGE_INPUT_VALUE } from './actionTypes'

// 异步请求action
export const getInitListAction = () => ({
    type: GET_INIT_LIST_ACTION
})

//同步数据操作action
export const initListAction = (value) => ({
    type: INIT_LIST_ACTION,
    value
})

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})