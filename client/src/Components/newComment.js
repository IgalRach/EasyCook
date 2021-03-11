import React from "react";



export default function NewComment(comments, setComments) {

   const onClick = () => {
    const index = window.location.toString().lastIndexOf('/') + 1;
    const id = window.location.toString().substring(index);
    console.log('id-recipe',id);

       fetch('http://localhost:8082/comments/'+ id, {
           method : 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               username: inputRef1.current.value,
               description: inputRef2.current.value
           })
       }).then(response => response.json()).then(
           data => {
               if(data.status === "success"){
                   inputRef1.current.value = '';
                   inputRef2.current.value = '';
                   setComments([data.value].concat(comments));
               }
           }
       )
   }

   const inputRef1 = React.useRef(null);
   const inputRef2 = React.useRef(null);

    return (
        <div className="row">
            <div className="col-12">
                <div className="contact-form-area">
                    <form >
                        <div className="row">
                            <div className="col-12">
                                <input ref={inputRef1} name="username" type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                            {/* <div className="col-12 col-lg-6">
                                <input type="email" className="form-control" id="email" placeholder="E-mail" />
                            </div>           */}
                            <div className="col-12">
                                <textarea ref={inputRef2} name="description" className="form-control" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
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




