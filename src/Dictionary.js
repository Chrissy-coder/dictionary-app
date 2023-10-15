import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState({});

  function handleResponse(response) {
    setDefinition(response.data);
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios.get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } });
  }

  function search(event) {
    event.preventDefault();
   
  }

    let apiKey = "8f63022fa4b60b22c3t7fe8f63b45ob9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
          <small className="hint">i.e. paris, wine, yoga, coding</small>
        </section>
        <Results definition={definition} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }

