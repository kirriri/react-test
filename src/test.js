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
<<<<<<< HEAD
        let srcObj = {
            name: 'lilei',
            age: '20',
            a: {
                aab: '1111'
            }
          };
           
          let copyObj2 = Object.assign({}, srcObj, {
            age: '21'
          });
           
          copyObj2.age = '23';
           
          console.log('srcObj', srcObj); //{ name: 'lilei', age: '22' }
=======
>>>>>>> dc3781ba9faa7615115c99fd5da30d56a2e97b4e
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