import React from 'react';

const NoteList = ({ notes, deleteNote }) => {

    console.log(notes)
    console.log(deleteNote)

  return (
    <div style={{display:"grid", margin:"auto" ,gridTemplateColumns:"repeat(3,1fr)", paddingLeft:"10%", paddingRight:"10%"}}>
      {notes && notes.map((note, index) => (
        <div style={{border:"1px solid black" , width:"200px", marginTop:"50px", padding:"20px"}}>
        <h4 key={index} >
          {note.text}
          
        </h4>
        <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
      
    </div>
  );
};

export default NoteList;
