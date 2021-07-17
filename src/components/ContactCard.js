import React from "react";

export default function ContactCard(props){
const [Id, Name, Email]=props.contact;

  return(
<div className="item">
<div className="content">
<div className="header">{Name}</div> 
<div>{Email}</div> 
<i className="trash alternate outline icon"></i> 
</div> 
</div>
  )
}