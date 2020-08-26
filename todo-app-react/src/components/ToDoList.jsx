import React, { useState, useEffect } from 'react';
import ToDos from './ToDos'
import InputField from './InputField.jsx'


const ToDoList = props => {
    const [toDoList, setToDoList] = useState([]);

    const getToDoList = async () => {
        // const list = await fetch('http://localhost:5000/todos/').then(response => response.json()).catch(error => {
        //     console.log(error.name);
        // });
        setToDoList(await fetch('http://localhost:5000/todos/').then(response => response.json()));
    }

    const addToList = async (newContent) => {
        setToDoList(await fetch('http://localhost:5000/todos/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ 'content': newContent, 'dateTime': new Date().toLocaleString() }),
        }).then(response => response.json()));
        // getToDoList();
        // setToDoList(prevValues => [...prevValues, { content: newContent, date: newDate }]);

    };
    const removeFromList = async id => {
        setToDoList(await fetch('http://localhost:5000/todos/', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ '_id': id }),
        }).then(response => response.json()));
        // getToDoList();
        // setToDoList(prevValues => prevValues.filter((todo, index) => index !== id));
    };

    useEffect(() => {
        getToDoList();
    }, []);

    return (<div className='container'>
        <InputField addNewItem={addToList} />
        {toDoList.map((todo, index) => { return (<ToDos key={index} id={todo._id} todo={todo.content} date={todo.dateTime} remItem={removeFromList} />) })}
    </div>
    )
}

export default ToDoList;