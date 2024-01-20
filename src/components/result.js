import {useEffect, useState} from 'react';
import '../style.css'
import axios from 'axios';
import React from "react";
import { useData } from './useData';
import { MContext } from './MyProvider';
import { useStore } from './store';

function Result({}) {
     const [searchResults, setSearchResults] = useState([]);

    const { inputText, setInputText } = useStore() 
    const apiKey = 'AIzaSyBHDouiCieJHoJC49H21pxVIxP-JnncakM';
    const searchEngineId = '26b6c4dab1a3543b9';
    const query=inputText; 
     const SearchResult =async()=>{
                 try {
                    const response = await axios.get(
                        `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`
                       
                    );
                      console.log({})
                    setSearchResults(response.data.items);
                    } catch (error) {
                    console.error('Error:', error);
    }
        }



useEffect(
  ()=>{SearchResult()}
    ,[])

    return(
      
    <div>
        
        <div class='sameline'>
             <div class="titleResult">
        <p style={{color: "blue",fontSize:'30px'}}>A</p>
        <p style={{color: "red",fontSize:'30px'}}>y</p>
        <p style={{color: "black",fontSize:'30px'}}>o</p>
        <p style={{color: "red",fontSize:'30px'}}>u</p>
        <p style={{color: "red",fontSize:'30px'}}>b</p>
        </div>
        <input type='text' class='form-control' placeholder="search" id='searchtext'/>    
        </div>
      <br></br>
      <div>
        {searchResults.map((item, index) => (
          <div key={index} class='middle'>
            <a href={item.link}>{item.title}</a>
            <p>{item.snippet}</p>
          </div>
        ))}
      </div>
          
               
    </div>
    )
}
export default Result;