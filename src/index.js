import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import { searchRobots } from './reducers';

import './index.css';
// import Card from './Card';
import App from './containers/App';
import 'tachyons';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(thunkMiddleWare, logger));

ReactDOM.render( 
                <Provider store={store}>
                  <App />
                </Provider>
                , document.getElementById('root'));