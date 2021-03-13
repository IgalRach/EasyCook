import React from "react";
import Recipe from "../recipe";
import NewComment from "../newComment"
import CommentList from "../commentList"



export default function DetailsPage() {
   
    
    return (
            <>
                <Recipe/>
                {/* <NewComment comments={comments} setComments={setComments}/> */}
                <CommentList/>
            </>
        );
}

