import React from "react";

export default function ContactList(props){

const renderContactLists=props.Contacts.map((contact) => {
return(
<div className="item">
<div className="content">
<div className="header">{contact.name}</div>
<div>{contact.email}</div> 
<i className="trash alternative outline icon"></i> 
</div>
</div>
);
});
return <div className="ui celled list">
{renderContactLists}
</div>

}