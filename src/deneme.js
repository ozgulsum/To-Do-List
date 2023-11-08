import React, { useState } from 'react';

function Notuyg() {
    const [notes, setNotes] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [editingIndex, setEditingIndex] = useState(-1);

    const addNotes = () => {
        if (newTitle && newDesc) {
            setNotes([...notes, { title: newTitle, desc: newDesc }]);
            setNewTitle("");
            setNewDesc("");
        }
    }

    const toggleEditing = (index) => {
        setEditingIndex(index);
    }

    const updateNote = (index) => {
        setEditingIndex(-1);
        
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>Not Listesi</h1>
            <br />
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Yeni Not Ekle" aria-label="Yeni Not Ekle" aria-describedby="basic-addon2" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <input type="text" className="form-control" placeholder="Yeni Not Ekle" aria-label="Yeni Not Ekle" aria-describedby="basic-addon2" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                <span className="input-group-text" id="basic-addon2" onClick={addNotes}>Ekle</span>
            </div>
            <ul className="list-group">
                {notes.map((item, index) => (
                    <ul key={index}>
                        {editingIndex === index ? (
                            <div>
                                <input type="text" className="form-control" value={item.title} onChange={(e) => setNewTitle(e.target.value) } />
                                <input type="text" className="form-control" value={item.desc} onChange= {(e)  =>  setNewDesc(e.target.value)} />
                            </div>
                        ) : (
                            <div>
                                <li className="list-group-item">{item.title}</li>
                                <li className="list-group-item">{item.desc}</li>
                            </div>
                        )}
                        <li>
                            {editingIndex === index ? (
                                <button className="btn btn-success" onClick={() => updateNote(index)}>Kaydet</button>
                            ) : (
                                <button className="btn btn-primary" onClick={() => toggleEditing(index)}>Güncelle</button>
                            )}
                            <button className="btn btn-danger" onClick={() => setNotes(notes.filter((e, i) => i !== index))}>Sil</button>
                        </li>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

export default Notuyg;

