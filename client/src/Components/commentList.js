import React from "react";
import Comment from "./comment"


export default function CommentList() {

    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        const index = window.location.toString().lastIndexOf('/')+1;
        const id = window.location.toString().substring(index);

        fetch('http://localhost:8082/comments/' + id)
            .then(response => response.json()).then(
                data => setComments(data)
            )
    }, [])

    return (
        <>
            {comments.map((data, key) => {
                return <Comment key={key} description={data.description} date= {data.created}  username={data.username} />
            })}
        </>
    );
}




