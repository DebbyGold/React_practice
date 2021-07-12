import "../styles.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";


export default function App() {
  return (
    <div className="App">
<Header />
<AddContact />
<ContactList />
<ContactCard />
    </div>
  );
}
