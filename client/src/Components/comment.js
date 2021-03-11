import React from "react";



export default function Comment({description, date, username}) {

    const published = date;
    const d = new Date(published);

    const now = new Date();
    
    var diff = (now-d);
    var diffDays = Math.floor(diff / 86400000); // days
    var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
    var diffMins = Math.floor((diff/1000)/60);
    var timestamp = diffMins;
    if (diffHrs){
        timestamp = diffHrs + " hours, " + timestamp;
    }
    if (diffDays){
        timestamp = diffDays + " days, " + timestamp;
    }

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin" style={{maxWidth: "1125px", margin: "auto", paddingBottom: "1%"}} ><br />
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '40px' }} />
            <span style={{fontWeight: "700",fontSize: "1.4rem", paddingRight: "1%", paddingLeft: "1%"}}>{username}</span>
            |<span className="w3-right w3-opacity" style={{paddingLeft: "3px"}}>{timestamp} min</span>
            <hr className="w3-clear" />
            <p>{description}</p>           
        </div>   
    );
}




