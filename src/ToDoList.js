import React, { useState } from 'react';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo) {
            setTodos([...todos, newTodo]);
            setNewTodo();
        }
    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <header>Görev Listesi</header>
            <br></br>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Yeni Görev Ekle" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setNewTodo(e.target.value)} />
                <span class="input-group-text" id="basic-addon2" onClick={addTodo}>Ekle</span>
                <button className="btn" ></button>
            </div>
            <div>

                <ul className="list-group">
                    {todos.map((todo, index) => (
                        <li key={index} className="list-group-item">{todo}</li>
                    ))}

                </ul>
            </div>

        </div>
    )
};

export default ToDoList
