import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import fetchUsers from './services/http.Services';
function App() {

  const[contacts,setContacts] = useState('');

//  useEffect(setContacts, [fetchUsers()]);

  useEffect(() => {
    const data = fetchUsers();
    console.log(data);
    setContacts(data);
  },[]);
 
  return (
<>
hola
</>
  );
}

export default App;
