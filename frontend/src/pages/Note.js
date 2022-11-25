import React, {useState, useEffect} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


const Note = () => {
    const navigate = useNavigate()
    const params = useParams()
    const noteId = params.id

    const [ note, setNote ] = useState(null)

    useEffect(() => {
        if(noteId !== 'add') getNote()
    }, [noteId])

    const getNote = async () => {
        const response = await fetch(`http://127.0.0.1/notes/${noteId}`)
        const data = await response.json()
        setNote(data)      

    }

    return(
        <div>
            <Link to={'/'}>Voltar</Link>
            {noteId !== 'add' && (
                <button>Deletar</button>
            )}

            <textarea 
                onChange={(e) => {setNote({...note, "body": e.target.value})}}
                value={note?.body}
                placeholder="Adicionar Nota..."
            >
            </textarea>
            <button>Salvar</button>
        </div>
    )
}

export default Note