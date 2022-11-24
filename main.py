from fastapi import FastAPI
from database import db

app = FastAPI()

@app.get("/")
def get_notes():
    return "Aqui vai ter umas notas legais"