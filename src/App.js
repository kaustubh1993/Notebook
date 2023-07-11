import './App.css';
import AllNotes from './components/AllNotes/AllNotes';
import Createnote from './components/CreateNote/Createnote';

import React, { useState } from 'react'

const App = () => {

const [notes, setNotes] = useState([]);
const createNote = (newNote) =>{
  setNotes([...notes,newNote])
}
  return (
    <div className='container mt-3 p-3'>
     <Createnote  createNote={createNote}/>
     <hr/>
     <AllNotes notes={notes}/>
    </div>
  )
}

export default App