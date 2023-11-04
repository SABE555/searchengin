import Header from './components/header';
import Content from'./components/Content';
import Footer from'./components/footer';
import Result from'./components/result'
import React from "react";
 
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
        <div style={{width:'100%'}} >
        <Header/>
        <div>
            <Routes >
                <Route path="/" element={<Content />} />
                <Route path="/Result" element={<Result />} />
            </Routes>
        </div>
        <Footer/>
      </div>
      </BrowserRouter>

   );
}

export default App;
