import React from 'react';
import './ToDos.css';


const ToDos = (props) => {
    const sendId = () => {
        props.remItem(props.id);
    }
    return (

        <div id='to-do-items'>
            <div>
                <span className='todo-item'>{props.todo}</span>
            </div>

            <span>
                <span  id='date-time' className='grey-text date-time'>{props.date}</span>
                <i className='secondary-content material-icons red-text delete-btn' onClick={sendId} >
                    delete
                        </i>
            </span>

        </div >

    )

}



export default ToDos;