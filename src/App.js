import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import CardQuote from './Components/CardQuote/CardQuote';

function App() {

  const [quote, setQuote] = useState({})
  
  const getQuotes = async () => {
    const url = 'https://www.breakingbadapi.com/api/quote/random'
    const resp = await axios.get(url)
    setQuote(resp.data[0])

    console.log(resp.data[0])
  }

  useEffect(()=>{
    getQuotes() //Use effect en este caso para evitar el ciclado de la app
  }, [])

    
    return (
      <div className='App'>
        <header className='App-header'>
          <CardQuote info={ quote } />
          <button onClick={ ()=>getQuotes()} style={{
            padding: '15px 35px 15px 35px',
            cursor: 'pointer',
            fontSize: '22px'

          }}>
            Click
          </button>
        </header>
      </div>
    )
}
  



export default App;
