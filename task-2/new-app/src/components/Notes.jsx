import React, { useEffect, useState } from 'react'
import AddNote from './AddNote';
import NoteList from './NoteList';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      // Fetch notes from the backend when the component mounts
     fetchData()
        
    }, []); // Empty dependency array ensures the effect runs only once

    function fetchData(){
        fetch('https://olive-trout-belt.cyclic.app/notes')
        .then((response) => response.json())
        .then((data) => setNotes(data.notes))
        .catch((error) => console.error('Error fetching notes:', error));
         
    }
  
    const addNote = async (note) => {
        try {
          // Make a POST request to add a new note
          const response = await fetch('https://olive-trout-belt.cyclic.app/notes/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: note }),
          });
      
          if (!response.ok) {
            throw new Error('Error adding note');
          }
      
          // Wait for the POST request to complete, then fetch the updated data
          await fetchData();
        } catch (error) {
          console.error('Error adding note:', error);
        }
      };
      
  
    const deleteNote = (id) => {
      // Make a DELETE request to delete a note
      console.log(id)
      fetch(`https://olive-trout-belt.cyclic.app/notes/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
      })
        .then(() => setNotes(notes.filter((note) => note._id !== id)))
        .catch((error) => console.error('Error deleting note:', error));
    };
  
    // ... (remaining code)
  console.log(notes)
    return (
      <div>
        <h1>Notes Web App</h1>
        <AddNote addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    );
}

export default Notes