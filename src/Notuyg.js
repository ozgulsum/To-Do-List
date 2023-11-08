import React, { useState } from 'react'

function Notuyg() {
    const [notes, setNotes] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    // const [newEdit, setNewEdit] = useState("");
    


    const addnotes = () => {
        if (newTitle && setNewDesc) {
            setNotes([...notes, { title: newTitle, desc: newDesc, /*edit:newEdit*/}]);
            setNewTitle("");
            setNewDesc("");
            // setNewEdit("");


        }


        // const newEdit = (index) => {
        //     setNewEdit(index);
        // }


        // const toggleEditing = (index) => {
        //     setEditingIndex(index);
        // }

        // const updateNote = (index) => {
        //     setEditingIndex(-1);


    }
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <header>Not Listesi</header>
            <br></br>
            < div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Yeni Not Ekle" aria-label="Yeni Not Ekle" aria-describedby="basic-addon2" onChange={(e) => setNewTitle(e.target.value)} />
                <input type="text" class="form-control" placeholder="Yeni Not Ekle" aria-label="Yeni Not Ekle" aria-describedby="basic-addon2" onChange={(e) => setNewDesc(e.target.value)} />
                <span class="input-group-text" id="basic-addon2" onClick={addnotes}>Ekle</span>
                <button className="btn">
                </button>
            </div>
            <ul className="list-group">
                {notes.map((item, index) => (
                    <ul key={index}>
                        <li className="list-group-item">{item.title}</li>
                        <li className="list-group-item">{item.desc}</li>
                        <li><button onClick={() => setNotes(notes.filter((e, i) => i !== index))}>Sil</button></li>
                        <li><button onClick={() => setNotes(notes.filter((e, i) => i !== index))}>Güncelle</button></li>
                    </ul>))}
            </ul>



        </div>
    )
}




export default Notuyg
