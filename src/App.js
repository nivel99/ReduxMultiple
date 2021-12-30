import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, handleLoggin} from './actions'
import './App.css';
function App() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={()=> dispatch(increment(5))}>+
            </button>
            <button onClick={()=> dispatch(decrement())}>-
            </button>
            <div>
                <button onClick={()=> dispatch(handleLoggin())}> 
                Login</button>
            </div>
            {isLogged ? <h1>Only show when loggin is true</h1> : ''}
        </div>
    );
}
export default App;