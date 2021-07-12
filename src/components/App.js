import "../styles.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
<Header />
<AddContact />
<ContactList />
    </div>
  );
}
