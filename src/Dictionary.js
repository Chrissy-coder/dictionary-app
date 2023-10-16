import React, { useState } from "react";
import axios from "axios";
import Results from './Results';
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

function handleResponse (response) {
  console.log(response.data);
 
}

  
  function search(event) {
    event.preventDefault();
    

    
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=8f63022fa4b60b22c3t7fe8f63b45ob9`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  

 function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

    return (
      <div className="Dictionary">
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
          <Results />
      </div>
    );
    }
