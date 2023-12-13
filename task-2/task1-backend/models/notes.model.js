const mongoose=require("mongoose")

const NoteSchema=mongoose.Schema(
    {
       
        text:String,
        userID:String
    },{
        versionKey:false
    }
)

const NoteModel=mongoose.model("note",NoteSchema)

module.exports={
    NoteModel
}