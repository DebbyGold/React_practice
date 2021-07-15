import "../styles.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import "../components/Global.css"


export default function App() {

const contacts=[
  {
  Id:1,
  Name:"folorunsho",
  Email:"folorunsho@gmail.com"
  },

  {
  Id:2,
  Name:"Tayo",
  Email:"tayo@gmail.com"
  },

  {
  Id:3,
  Name:"Bisi",
  Email:"bisi@gmail.com"
  },

  {
  Id:4,
  Name:"femi",
  Email:"femmy@gmail.com"
  }
  ];

  return (
    <div className="ui container App">
<Header />
<AddContact />
<ContactList contacts={contacts}/>
<ContactCard />
    </div>
  );
}
