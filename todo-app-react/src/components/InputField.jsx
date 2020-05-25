// import React, { useState } from 'react';

// const InputField = (props) => {

//     const [newInput, setNewInput] = useState("");
//     const handleChange = event => {
//         const inputValue = event.target.value;
//         setNewInput(inputValue);
//     }

//     const handleClick = event => {

//         newInput !== '' && props.addNewItem(newInput);
//         event.preventDefault();
//         setNewInput("");
//     }
//     return (
//         <form>
//             <input type='text' placeholder='New To-Do' onChange={handleChange} value={newInput} autoFocus></input>
//             <button type='submit' onClick={handleClick} onSubmit={handleClick} id='add-btn'>+</button>
//         </form>
//     )
// }


// export default InputField;

import React from 'react';

const InputField = (props) => {

    var newInput = "";
    const handleChange = event => {
        newInput = event.target.value;

    }

    const handleClick = event => {
        event.preventDefault();
        newInput !== '' && props.addNewItem(newInput);
        document.querySelector('input').value = "";
    }
    return (
        <form>
            <input type='text' placeholder='New To-Do' onChange={handleChange} autoFocus></input>
            <button type='submit' onClick={handleClick} onSubmit={handleClick} id='add-btn'>+</button>
        </form>
    )
}


export default InputField;