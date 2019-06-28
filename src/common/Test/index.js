import React from 'react'
import { connect } from 'react-redux'
import  * as actionCreators  from '../../store/actionCreators'

const Test = (props) => {
    return (
        <div>
            <div>111</div>
            <input 
                value={props.test}
                onChange={props.handleChange.bind(this)}
            />
            <button
            >改变数据</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        test: state.test.get('value')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            dispatch(actionCreators.getInputChangeAction(e.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)