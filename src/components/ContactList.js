import React from "react";

export default function ContactList(props){

const renderContactLists=props.contacts.map((contact) => {
return(
<div className="item">
<div className="content" style={{display:"inline-flex", padding:"12px"}}>
<div className="header">{contact.Name}</div>
<div style={{paddingInline:"15px"}}>{contact.Email}</div> 
<i className="trash alternative outline icon"></i> 
</div>
</div>
);
});
return <div className="ui celled list">
{renderContactLists}
</div>

}