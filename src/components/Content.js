import React, { useState } from "react";
import  '../style.css';
import {Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import Result from "./result";
import  { useData }    from './useData';
import  {useStore}  from './store';

function Content(){
            
     const {inputText,setInputText}=useStore();
     return(
      <div>
     <div class="title">
        <p style={{color: "blue"}}>A</p>
        <p style={{color: "black"}}>y</p>
        <p style={{color: "yellow"}}>o</p>
        <p style={{color: "red"}}>u</p>
        <p style={{color: "red"}}>b</p>
    </div>


      <div class="searchInput" >
          <input type="text" class="form-control" id="searchtext" aria-describedby="searchtext" placeholder="search" onChange={ (e)=> setInputText(e.target.value)  }    />
     </div>
    
     
     <div class='searchbutton'>
           <button type="button" class="btn btn-light"> <Link to='Result' style={{ textDecoration: 'none' , color:"black" }} >Search Cars</Link></button>&nbsp;
           <button type="button" class="btn btn-light" >Cancel Cars</button>
     </div>
 </div>
    )
}
export default Content;