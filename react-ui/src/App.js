import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState('/api');

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <Header />
      
      <h1>BODY ALERT</h1>

      <footer className="App-header">
        { process.env.NODE_ENV === 'production' ?
            <p>
              This is going to be an open education platform
              /n production server
            </p>
          : <p>
              notProduction
            </p>
        }
        <p>{'« '}<strong>
          {isFetching
            ? 'Fetching message from API'
            : message}
        </strong>{' »'}</p>
      </footer>
    </div>
  );

}

export default App;
