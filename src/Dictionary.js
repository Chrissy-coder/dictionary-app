import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState({});
}

function handleResponse(response) {
  console.log(response.data[0]);
}

function search(event) {
  event.preventDefault();

  let apiKey = "8f63022fa4b60b22c3t7fe8f63b45ob9";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />

      <Results definition={definition} />
    </form>
  </div>
);
