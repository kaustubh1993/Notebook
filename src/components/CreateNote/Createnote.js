import React, { useState } from 'react';


const Createnote = ({createNote}) => {
const handleSubmit= (e) =>{
    e.preventDefault();
    const data={
        note,
        id:Math.floor(Math.random()* 1000),
        date: new Date().toJSON().slice(0,10),
        isImportant:false
    }
    createNote(data);
}
    const [note,setNote] = useState('')
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <textarea  cols='3' className='form-control'  value={note} onChange={e =>setNote(e.target.value)} placeholder='write your dream note :)'></textarea>
                <button className='btn' type='submit'>Add Note</button>
            </div>
        </form>
    </div>
  )
}

export default Createnote