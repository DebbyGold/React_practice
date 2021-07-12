import React from "react";

const style={
paddingTop:"55px"
}

export default function AddContact(){
return(
<div style={style} className="ui main">
<h3 style={{textAlign:"center"}}>Add Contacts</h3> 
<form className="ui form">
<div className="ui field">
<label>Name</label> 
<input type="text" name="name" placeholder="Name" />
</div> 
<div className="ui field">
<label>Email</label>
<input type="email" name="email" placeholder="Email" />
<button className="ui button blue" style={{marginTop:"15px"}}>Add</button>
</div>
</form>
</div> 
)
}