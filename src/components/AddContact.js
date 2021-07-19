import React from "react";

const style={
paddingTop:"55px"
}

export default function AddContact(){
  const state= {
name:"",
email:"",
  }
const add=(e)=>{
e.preventDefault();
if(this.state.name==="" && this.state.name===""){
alert("All fields are mandatory");
return
}
console.log(this.state);
}
return(
<div style={style} className="ui main">
<h3 style={{textAlign:"center"}}>Add Contacts</h3> 
<form className="ui form" onSubmit={this.add}>
<div className="ui field">
<label>Name</label> 
<input type="text" name="name" placeholder="Name" value={this.name} onChange={(e)=>this.setState({name:e.target.name})}/>
</div> 
<div className="ui field">
<label>Email</label>
<input type="email" name="email" placeholder="Email" value={this.email} onChange={(e) => this.setState({email:e.target.value})} />
<button className="ui button blue" style={{marginTop:"15px"}}>Add</button>
</div>
</form>
</div> 
)
}