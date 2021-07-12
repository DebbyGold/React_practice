import "../styles.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import "../components/Global.css"


export default function App() {
  return (
    <div className="ui container App">
<Header />
<AddContact />
<ContactList />
<ContactCard />
    </div>
  );
}
