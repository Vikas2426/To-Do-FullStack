import React, { useEffect } from 'react';
import "./App.css";

import Footer from './Footer.jsx';
import ToDoList from './ToDoList.jsx'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


const App = () => {
    useEffect(() => {
        M.AutoInit();
    });
    return (

        <div id='app'>
            <div id='todo-container'>
                <ToDoList />
            </div>
            <Footer />
        </div>)
}



export default App;