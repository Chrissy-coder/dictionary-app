import React from "react";


export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <em>{props.phonetic}</em>
      </div>
    );
  } else {
    return null;
  }
}
