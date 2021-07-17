import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props){

const renderContactLists=props.contacts.map((contact) => {
return(
  <div>
<ContactCard contact={contact}></ContactCard> 
</div>
);
});
return<div className="ui celled list">
<h3>Contact Lists</h3> 
{renderContactLists}
</div>

}