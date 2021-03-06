// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('DD: ',props)
const [data] = useState(props.comments);

  return (
    <div>
      {data.map(d => (<Comment comment={d}/>))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
