import React from 'react';

const ToDos = (props) => {
    const sendId = () => {
        props.remItem(props.id);
    }
    return (
        <div className="to-do-container">
            <div id='to-do-item'><p>{props.todo}</p><p id='date-time'>{props.date}</p></div>
            <button id='delete-btn' onClick={sendId}><p>Delete</p></button>
        </div>
    )

}


export default ToDos;