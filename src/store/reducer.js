const defaultState = {
    value: 'test',
    bbb: [1,1,1]
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.value = action.value

        return newState
    }
    console.log(JSON.parse(JSON.stringify(state)))
    return state;
}