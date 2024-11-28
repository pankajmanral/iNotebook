import noteContext from "./noteContext";
import { useState } from "react";

const NoteStatee = (props) =>{

    const host = 'http://localhost:5000'
    const initailNote = []
    const [note, setNote] = useState(initailNote)

    const getNote = async () => {
        try {
            
            const response = await fetch(`${host}/api/notes/fetch-notes`,{
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            .then(response => response.json())
            .then((data) => {
                setNote(data)
            })

        } catch (error) {
            console.log("This is getdata erorr", error)
        }
    }



    return (
        <noteContext.Provider value={{ note,setNote,getNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteStatee