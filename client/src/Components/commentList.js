import React from "react";
import Comment from "./comment"


export default function CommentList({ comments }) {

    return (
        <>
            {comments.map((data,key) => {
                return <Comment key={key} comment={data}/>
            })}            
        </>
    );
}




