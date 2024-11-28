const express = require('express')
const router = express.Router()
const Note = require('../models/Notes')

router.get('/fetch-notes', async(req,res)=>{
    try {
        const note = await Note.find()
        res.json(note)
    } catch (error) {
        console.log("Error : ",error);  
        res.status(500).send('Internal Server error')
    }
})

router.post('/create-note',async(req,res)=>{
    try {

        const {title,description} = req.body

        if (!title || !description){
            return res.status(400).json({error : 'Title and description is required'})
        }
        const newNote = new Note({
            title,
            description
        })
        const saveNote = await newNote.save()
        return res.json(saveNote); 

    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error')
    }
})

router.put('/update-note/:id',async(req,res)=>{
    try {

        const {id} = req.params
        const {title,description} = req.body

        if(!title || !description){
            return res.status(500).send({error:'Title and description is must'})
        }

        let note = await Note.findById(id)

        if (title) note.title = title
        if (description) note.description = description

        const updatedNote = await note.save()

        return res.json(updatedNote)

    } catch (error) {
        res.status(500).send('Internal server error')
    }
})

router.delete('/delete-note/:id',async(req,res)=>{
    try {

        const {id} = req.params
        let note = await Note.findByIdAndDelete(id)
        res.json(note)

    } catch (error) {
        res.status(500).send('Internal server error')
    }
})

module.exports = router