import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "8f63022fa4b60b22c3t7fe8f63b45ob9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a word"
            autoFocus={true}
            className="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">Suggested words: sunset, wine, yoga</div>
      </section>
      <Results results={results} />
    </div>
  );
}
