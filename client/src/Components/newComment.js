import React from "react";



export default function NewComment(comments, setComments) {
   
    // const [comments, setComments] = React.useState(null);
    

    // React.useEffect(() => {
    //     const index = window.location.toString().lastIndexOf('/')+1;
    //     const id = window.location.toString().substring(index);
     

    //     fetch('http://localhost:8082/recipes/' + id)
    //     .then(response => response.json())
    //     .then(data => setRecipesDetails(data)
    //     )
    // },[]) 

   const onClick = () => {
       fetch('http://localhost:8082/recipes', {
           method : 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               content: inputRef.current.value
           })
       }).then(response => response.json()).then(
           data => {
               if(data.status === "success"){
                   inputRef.current.value = '';
                   setComments([data.value].concat(comments));
               }
           }
       )
   }

   const inputRef = React.useRef(null);
   
    return (
        <div className="row">
            <div className="col-12">
                <div className="contact-form-area">
                    <form action="#" >
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <input type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                            <div className="col-12 col-lg-6">
                                <input type="email" className="form-control" id="email" placeholder="E-mail" />
                            </div>
                            {/* <div className="col-12">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            </div> */}
                            <div className="col-12">
                                <textarea ref={inputRef} name="message" className="form-control" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                            </div>
                            <div className="col-12">
                                <button onClick={onClick} className="btn delicious-btn mt-30" type="submit">Post Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}




