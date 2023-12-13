import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    
      addNote(note);
      setNote('');
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNote;
