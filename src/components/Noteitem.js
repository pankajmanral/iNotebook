import React, { useContext,useEffect } from "react";
import noteContext from "../context/note/noteContext";

export default function Noteitem() {
    const { note,getNote } = useContext(noteContext);

    useEffect(() => {
        getNote()
    }, [])
    

    return (
        <>
        <div>
            {note.map((element) => {
                return <div className="col-md-3 mt-5" key={element._id}>
                            <div className="card-body">
                                <h5 className="card-title">dkjdskfj</h5>
                                <p className="card-text">{element.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
            })}
        </div>
        </>
    );
}
