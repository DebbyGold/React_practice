import "../styles.css";
import React, {useState} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "../components/Global.css"
import {uuid} from "uuidv4";


export default function App() {
const [contacts, setcontacts]=useState([]);

  return(
    <div className="ui container App">
<Header />
<AddContact />
<ContactList contacts={contacts}/>
    </div>
  );
}
