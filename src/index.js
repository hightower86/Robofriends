import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import './index.css';
// import Card from './Card';
import App from './containers/App';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render( 
                <Provider store={store}>
                  <App />
                </Provider>
                , document.getElementById('root'));