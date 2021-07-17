import React from "react";
import User from "../components/Images/User.png";

export default function ContactCard(props){
const {Id, Name, Email}=props.contact;

  return(
<div className="item">
<div style={{display:"flex", marginBottom:"15px"}} className="content">
<img className="ui avatar image" src={User} alt="user" />
<div style={{display:"block",marginLeft:"7px"}}>
<div className="header">{Name}</div> 
<div>{Email}</div>
</div> 
</div>
<div>
<i style={{float: "right", marginTop:"-45px"}} className="trash alternate outline icon"></i>
</div>
</div>
  )
}