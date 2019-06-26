import React from 'react'
import store from './store'
import { getInitListAction, getInputChangeAction } from './store/actionCreators'

class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        console.log('constructor')
        store.subscribe(this.handleStoreChange)
    }

    componentDidMount() {
        const action = getInitListAction()
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
        console.log(this.state)
    }

    handleClick = () => {

    }

    handleChange = (e) => {
        const action = getInputChangeAction(e.target.value)
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