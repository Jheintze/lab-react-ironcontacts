// src/App.js
import "./App.css";
import data from "./contacts.json";
import { useState } from "react"


function App() {

  const [contacts, setContacts] = useState(data.slice(0,5))
  const [query, setQuery] = useState("")

  function addContact(){
    let randomContact = data[Math.floor(Math.random()*data.length)];
    setContacts([randomContact, ...contacts])
    console.log(contacts)
   }
   console.log(contacts)

   function sortByPopularity() {
    let popularitySorted = [...contacts].sort((a, b) => a.popularity < b.popularity ? -1 : 1)
    setContacts(popularitySorted)
  }

const sortByName = () => {
    let sortedContacts = contacts.slice().sort(function (a, b) {
        return a.name.localeCompare(b.name)
    })
    setContacts(sortedContacts)
}
   
function deleteContact(id) {
  const deletedArray = [...contacts].filter(contact => {
    return contact.id !== id
  })
  setContacts(deletedArray)
}


  return <div className="App">
   <button onClick={addContact}>Add a Contact</button>
   <button onClick={sortByPopularity}>Sort by popularity</button>
            <button onClick={sortByName}>Sort by name</button>
            
    <table>
      <tr>
        <th>picture</th>
        <th>name</th>
        <th>popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
      {contacts.map((contact) => (
        <tr>
        <td> <img src={contact.pictureUrl} alt="celebPic"/> </td>
        <th><h3>{contact.name}</h3></th>
        <th><h4>{contact.popularity}</h4></th>
        <th>{contact.wonOscar ? " 🏆 " : "no"}</th>
        <th><h4>{contact.wonEmmy ? " 🏆 " : "no "}</h4></th>
        <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
      </tr>
      ))}
    </table>
  </div>;
}
export default App;