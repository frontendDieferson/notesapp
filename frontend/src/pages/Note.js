
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as SaveIcon } from "../assets/save.svg";

const Note = ({match}) => {
  let [note, setNote] = useState(null);
  let params = useParams();
  let noteId = params.id;
  let navigate = useNavigate();

  
  const getNote = async () => {
    let response = await fetch(`/notes/${noteId}`);
    let data = await response.json();
    setNote(data)
  };
  
  useEffect(() => {
    if (noteId !== "add") getNote()
  }, [noteId]);
  
  const submitData = async (e) => {
    e.preventDefault();

    let url = "/notes";
    let method = "POST";

    if (params.id !== "add") {
      url = `/notes/${noteId}`;
      method = "PUT";
    }

    let noteBody = note?.body
    if ( noteBody !== undefined ){
      noteBody = String(noteBody).trim()
    }
   

    if (noteBody === '' || noteBody === undefined) {
      alert("Nota não pode estar vazia");
      return;
    }

    await fetch(url, {
      method: method,
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'body': note.body }),
    });
    navigate("/");
  };

  let deleteNote = async (e) => {
    e.preventDefault();
    await fetch(`/notes/${noteId}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/"}>
            <ArrowLeft />
          </Link>
        </h3>
        {noteId !== "add" && (<button onClick={deleteNote}>Deletar</button>)}
      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value}) }} placeholder="Editar nota" value={note?.body} required></textarea>

      <div className="floating-button" onClick={submitData}>
        <SaveIcon />
      </div>
    </div>
  );
};

export default Note;
