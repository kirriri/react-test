import React from 'react'
import store from './store'
import { getInitList, getInputChangeAction } from './store/actionCreators'

class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        console.log('constructor')
        store.subscribe(this.handleStoreChange)
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
        let srcObj = {
            name: 'lilei',
            age: '20'
          };
           
          let copyObj2 = Object.assign({}, srcObj, {
            age: '21'
          });
           
          copyObj2.age = '23';
           
          console.log('srcObj', srcObj); //{ name: 'lilei', age: '22' }
    }

    handleStoreChange = () => {
        console.log(store.getState())
        this.setState(store.getState())
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