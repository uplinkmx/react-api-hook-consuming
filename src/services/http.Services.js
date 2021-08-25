import React from 'react';
const fetchUsers = () =>{
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          return data
        })
        .catch(error => {
return error
        })
      }

      export default fetchUsers;

