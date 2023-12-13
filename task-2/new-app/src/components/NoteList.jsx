import React from 'react';

const NoteList = ({ notes, deleteNote }) => {

    console.log(notes)
    console.log(deleteNote)

  return (
    <div>
      {notes && notes.map((note, index) => (
        <h4 key={index}>
          {note.text}
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </h4>
      ))}
    </div>
  );
};

export default NoteList;
