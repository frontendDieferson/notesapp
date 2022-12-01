
# NotesApp - Fast API + React App With HarperDB

Projeto simples de Todo-List para inserção de notas para seu dia-a-dia com funcionalidades básicas como Adição, edição e exclusão de notas.


## Funcionalidades

- Tema Dark
- Criação de Notas
- Edição / Atualização de Notas
- Multiplataforma


## Instalação do backend

Instalação FastAPI e HaperDB
```bash
  pip install fastapi
  pip install "uvicorn[standard]"
  pip install harperdb


```
## Para rodar a aplicação execute
```bash
  uvicorn main:app --reload
```

## instação de dependências do Frontend

```bash
  cd frontend notesapp
  npm install
  npm start
```

## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

Aprendi como desenvolver uma simples API utilizando o framework FASTAPI e também como salvar os dados em um banco de dados.
E juntando tudo isso, fixei o conteúdo de como consumir uma API no frontend usando Reactjs.

## Stack utilizada

**Front-end:** React, Hooks

**Back-end:** FastAPI, HaperDB

![Minhas Notas](https://user-images.githubusercontent.com/62387982/205068562-0a4f20f2-eb10-4adb-a9c5-cfacf8f0dcb3.png)


## Melhorias

Próximos passos: Arrumar o formato de datas pra pt-BR, criar uma área para usuários com perfil, Login e Logout
e adcionar campo para upload de imagens.

