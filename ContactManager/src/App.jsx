import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SearchForm from "./components/SearchForm";
import MainContainer from "./container/MainContainer";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchNo, setSearchNo] = useState("");

  const handleOnAddBtn = (number, userName) => {
    if (number && userName) {
      const newArr = [...contacts, { number: number, userName: userName }];
      setContacts(newArr);
    } else {
      setError("please enter a number and username");
    }
  };

  const handleOnSearch = (e) => {
    setSearchNo(e.target.value);
  };
  const filterContacts = contacts.filter((contact) =>
    contact.userName.toLowerCase().includes(searchNo.toLowerCase())
  );

  return (
    <>
      <MainContainer>
        <SearchForm numberUserName={handleOnAddBtn} />

        <ContactList contacts={filterContacts} />
        <input
          type="text"
          placeholder=" search"
          value={searchNo}
          onChange={handleOnSearch}
        />
      </MainContainer>
    </>
  );
}

export default App;
