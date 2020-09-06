import {Map} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const data = Map({msg: "Hello dev server!"});

ReactDOM.render(
    <h1 className={['hello']}>{data.toString()}</h1>,
    document.getElementById('root')
);
