import React from "react";
import User from "../components/Images/User.png";

export default function ContactCard(props){
const {Id, Name, Email}=props.contact;

  return(
<div className="item">
<div className="content">
<img className="ui avatar image" src={User} alt="user" />
<div className="header">{Name}</div> 
<div>{Email}</div>
</div> 
<div>
<i style={{float: right}} className="trash alternate outline icon"></i>
</div>
</div>
  )
}