import React from "react";

export default function AddContact(){
return(
<div className="ui main">
<h3>Add Contacts</h3> 
<form className="ui form">
<div className="ui field">
<label>Name</label> 
<input type="text" name="name" placeholder="Enter Name here..." />
</div> 
<div className="ui field">
<label>Email</label>
<input type="email" name="email" />
</div>
</form>
</div> 
)
}