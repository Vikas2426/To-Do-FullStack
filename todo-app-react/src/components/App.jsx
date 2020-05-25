import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ToDoList from './ToDoList.jsx'



const App = () => {

    return (

        <div id='app'>
            <Header />
            <ToDoList />
            <Footer />
        </div>)
}



export default App;