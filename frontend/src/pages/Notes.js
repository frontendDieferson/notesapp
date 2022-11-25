import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ListItem from '../components/ListItem'

import { ReactComponent as AddIcon } from '../assets/add.svg'

const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        const response = await fetch('/notes')
        const data = await response.json()
        setNotes(data)
    }
    return(
        <div className='notes'>
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notas</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      
      <div className="notes-list">
        {notes.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>

      <Link to="/add" className="floating-button">
            <AddIcon />
      </Link>
    </div>
    )
}

export default Notes;