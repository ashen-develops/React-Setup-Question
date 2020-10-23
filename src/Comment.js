import React from 'react';


function Comment(props) {
  return (
    <div className="Comment">
      <div>
        <h2>{props.author}</h2>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}

export default Comment;


// Start a new project using Create React App, then create and render a stateless React component which renders the author and text of a comment, received via its props.This question is required. *

// renders author and text of comment
