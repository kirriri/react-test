import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST_ACTION } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* Sagas() {
    yield takeEvery(GET_INIT_LIST_ACTION, getInitListAction);
}

function* getInitListAction() {

    const res = yield axios.get('https://www.easy-mock.com/mock/5ca16cc1f59c310bd668a59c/test/mock/table/list')
    console.log(res)
    if(res.status === '200' && res.data) {
        const action = initListAction(res.data)
        yield put(action)
    }
}

export default Sagas