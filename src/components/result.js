import {useEffect, useState} from 'react';
import '../style.css'
import axios from 'axios';

function Result( ) {

    const [searchResults, setSearchResults] = useState([]);
    const apiKey = 'AIzaSyBHDouiCieJHoJC49H21pxVIxP-JnncakM';
    const searchEngineId = '26b6c4dab1a3543b9';
    const query='cars'
    
    const SearchResult =async()=>{
                 try {
                    const response = await axios.get(
                        `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`
                    );

                    setSearchResults(response.data.items);
                    } catch (error) {
                    console.error('Error:', error);
    }
        }



useEffect(
  ()=>{
    SearchResult()},[])

    return(
    <div>    
        <div class='sameline'>
             <div class="titleResult">
        <p style={{color: "blue",fontSize:'30px'}}>C</p>
        <p style={{color: "red",fontSize:'30px'}}>a</p>
        <p style={{color: "black",fontSize:'30px'}}>r</p>
        <p style={{color: "red",fontSize:'30px'}}>s</p>
        </div>
        <input type='text' class='form-control' placeholder="search" id='searchtext'/>    
        </div>

        <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

    </div>
    )
}
export default Result;