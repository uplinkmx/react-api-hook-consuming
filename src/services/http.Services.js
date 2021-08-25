import { useState, useEffect } from 'react';

function useAsyncHook(){
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setResult(json);
        setLoading("true");
      } catch (error) {
        setLoading("false");
      }
    }
    fetchUsers();
  }, []);
  return [result, loading];
}

export { useAsyncHook };

