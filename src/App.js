import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Test from './common/Test'

function App() {
  return (
    <Provider store={store}>
      <Test></Test>
    </Provider>
  );
}

export default App;
