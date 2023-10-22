import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div className="Definition"> {props.meaning.definition}</div>
        <div className="Example">
          {" "}
          {props.meaning.example}
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
