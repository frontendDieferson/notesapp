/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as SaveIcon } from "../assets/save.svg";

const Note = () => {
  const params = useParams();
  const noteId = params.id;

  const navigate = useNavigate();

  const [note, setNote] = useState(null);

  useEffect(() => {
    if (noteId !== "add") getNote();
  }, [noteId]);

  const getNote = async () => {
    const response = await fetch(`/notes/${params.id}`);
    const data = await response.json();
    setNote(data)
  };

  const submitData = async (e) => {
    e.preventDefault();

    const url = "/notes";
    const method = "POST";

    if (params.id !== "add") {
      url = `/notes/${params.id}`;
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
      body: JSON.stringify({ 'body': noteBody }),
    });
    navigate("/");
  };

  const deleteNote = async (e) => {
    e.preventDefault();
    await fetch(`/notes/${params.id}`, {
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
        {noteId !== "add" && <button onClick={deleteNote}>Deletar</button>}
      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value}) }} placeholder="Editar nota" value={note?.body} required></textarea>

      <div className="floating-button" onClick={submitData}>
        <SaveIcon />
      </div>
    </div>
  );
};

export default Note;
