import React, { useState } from 'react';

function ToDoForm(props) {
    const [input, setInput] = useState (props.edit ? props.edit.value : '');


    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input

        })
        setInput('');
    }

        const handleChange = e => {
            setInput(e.target.value);
        }


    return (
        <form className="toDo-form" onSubmit={handleSubmit}>

            {props.edit ? (
                <>
                    <input type="text" placeholder="Update your item" value={input} name="text" className="toDo-input edit"
                           onChange={handleChange}/>
                    <button className="toDo-button edit">Actualizar</button>
                </>
            ) : (
                <>
                    <input type="text" placeholder=" AGREGAR TAREA" value={input} name="text" className="toDo-input" onChange={handleChange}/>
                    <button className="toDo-button">AÑADIR QUE HACER</button>
                </>
            )}
        </form>
        )
}

export default ToDoForm
