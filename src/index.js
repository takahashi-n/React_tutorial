import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*
const Profile = (props) => {
    return (
        <ul>
            <li>名前：{props.name}</li>
            <li>誕生日：{props.birthDay}</li>
        </ul>
    )
};

ReactDOM.render(
    <Profile name='坂本竜馬' birthDay='1836/01/03' />,
    document.getElementById('root')
)
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
