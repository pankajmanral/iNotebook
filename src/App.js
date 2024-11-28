import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import NoteStatee from './context/note/NoteStatee';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
      <NoteStatee>
        <Router>
          <Navbar title={"NOTES APP"} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
      </NoteStatee>
    </>
  )
}
