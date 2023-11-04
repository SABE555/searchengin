import React, { useState } from "react";
import  '../style.css';
import {Link} from "react-router-dom";
import axios from 'axios';

function Content(){
    
         const [SearchText,setSearchText] = useState('');
          const [searchResults, setSearchResults] = useState([]);
    //     const apiKey = 'AIzaSyBHDouiCieJHoJC49H21pxVIxP-JnncakM';
    //     const searchEngineId = '017576662512468239146:omuauf_lfve';
    //     const query='cars'
    //     const SearchResult =async()=>{
    //              try {
    //                 const response = await axios.get(
    //                     `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`
    //                 );

    //                 setSearchResults(response.data.items);
    //                 } catch (error) {
    //                 console.error('Error:', error);
    // }
    //     }

    return(
        <div>
     <div class="title">
        <p style={{color: "blue"}}>C</p>
        <p style={{color: "red"}}>a</p>
        <p style={{color: "yellow"}}>r</p>
        <p style={{color: "red"}}>s</p>
    </div>
     <div class="searchInput" >
          <input type="text" class="form-control" id="searchtext" aria-describedby="searchtext" placeholder="search"    />
     </div>
     <div class='searchbutton'>
           <button type="button" class="btn btn-light"> <Link to='Result' style={{ textDecoration: 'none' , color:"black" }} >Search Cars</Link></button>&nbsp;
           <button type="button" class="btn btn-light" >Cancel Cars</button>
     </div>

     
     
</div>
    )
}
export default Content;