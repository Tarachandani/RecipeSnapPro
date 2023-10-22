import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
let x = 7;
let y = x;
root.render(
    <App></App>
)