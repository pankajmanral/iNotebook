import React from 'react'
import Addnote from './Addnote'
import Noteitem from './Noteitem'

export default function Home() {
    return (
        <>
            <div className='fluid-container p-5'>
                <h1>This is home page</h1>
                <Addnote/>
                <Noteitem/> 
            </div>
        </>
    )
}
