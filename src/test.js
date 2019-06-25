import React from 'react'
import store from './store'
import { CHANGE_INPUT_VALUE } from './store/actionTypes'
import { getInputChangeAction } from './store/actionCreators'

class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {
        this.setState(store.getState())
    }

    handleClick = () => {

    }

    handleChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        console.log(action)
        store.dispatch(action)
    }
    
    render() {
        return(
            <div>
                <div>111</div>
                <input 
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >改变数据</button>
            </div>
        )
    }
}

export default Test