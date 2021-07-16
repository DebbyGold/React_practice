import React from "react";

export default function ContactCard(props){
const [id, Name, Email]=props.contacts.map((contact)=>{
})
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