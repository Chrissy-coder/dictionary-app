import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        {props.definition.meanings.map(function (meaning, index) {
          return (
<div key={index}>
<Meaning meaning={meaning} />
  </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
