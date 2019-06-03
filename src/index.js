import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import Cardlist from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots.js';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( 
    <Cardlist robots={robots}/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();