import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [response, setResponse] = useState("Success");

  const fetchData = async (query) => {
    const response = await fetch(`/search?q=${query}`)
    const data = await response.json()
    setResponse(data)
    console.log({response})
  }

  const searchTracks = (event) => {
    if (event.target.value.length > 5) fetchData(event.target.value)
  }

  const Titles = () => {
    if (response.tracks && response.tracks.items) {
      console.log(response.tracks.items)
      return response.tracks.items.map(track => (
        <p>{track.name} - {track.artists[0].name}</p>
      ))
    }
    return ''
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => e.preventDefault()}>
          <label>Start search:</label><br />
          <input  type="text" id="q" name="q" onChange={searchTracks} />
        </form>
        <Titles />
      </header>
    </div>
  );
}

export default App;
