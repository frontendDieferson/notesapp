from fastapi import FastAPI, Body

from database import db

app = FastAPI()


@app.get("/")
def get_notes():
    return "Aqui vai ter umas notas legais"

    notes = db.search_by_value('notesapp', 'notes', 'id', '*',
                               get_attributes=['*'])
    return notes


@app.post("/notes")
def addNotes(data=Body()):
    db.insert('notesapp', 'notes', [{'body': data['body']}])

    notes = db.search_by_value('notesapp', 'notes', 'id', '*',
                               get_attributes=['*'])

    return notes


@app.get("/notes/{pk}")
def getNotes(pk: str):
    notes = db.search_by_hash('notesapp', 'notes', [pk],
                              get_attributes=['*'])
    return notes[0]


app.get("/notes/{id}")
def updateNotes(id: str, data=Body()):
    db.update('notesapp', 'notes', [{"id": id, "body": data["body"]}])

    notes = db.search_by_value('notesapp', 'notes', 'id', '*',
                               get_attributes=['*'])
    return notes


@app.delete("/notes/{id}")
def deleteNote(id: str):
    db.delete('notesapp', 'notes', '[id]')

    notes = db.search_by_value('notesapp', 'notes', 'id', '*',
                               get_attributes=['*'])
    return notes

