import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Form from "./components/Form";
import Snippets from "./Snippets";
import Navbar from "./components/Navbar";


function App(){
  return (
    <>
      <Navbar/>
      <Router>
      <Routes >
        <Route exact path="/" element={<Form/>} />
        <Route path="/snippets" element={<Snippets/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
