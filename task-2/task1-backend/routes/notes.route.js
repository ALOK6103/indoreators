const express = require("express");

const noteRouter=express.Router()
const { NoteModel } = require("../models/notes.model");


noteRouter.get('/', async (req, res) => {
    try {
      const notes = await NoteModel.find();
      res.status(200).send({notes});
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // API endpoint to add a note
  noteRouter.post('/notes', async (req, res) => {
    try {
        await NoteModel.create(req.body)
        res.status(200).send({msg:"notes created"})
    } catch (error) {
        res.status(200).send({msg:error})
    }
  });
  
  // API endpoint to delete a note by ID
  noteRouter.delete('/notes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await NoteModel.findByIdAndDelete(id);
      res.status(200).send({msg:"notes deleted"})

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports={
    noteRouter
  }