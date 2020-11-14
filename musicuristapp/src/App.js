import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [response, setResponse] = useState({'status': 'blank'});

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch('/api/search')
      const data = await response.json()
      console.log('\n\nRESPONSE:\n', data, '\n\n')
      setResponse(data)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{response.status}</p>
      </header>
    </div>
  );
}

export default App;
