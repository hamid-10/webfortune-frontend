import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Button, Container } from 'react-bootstrap';

const EpigramText = () => {

  const [epigramText, setEpigramText] = useState('');

  const fetchEpigramText = () => {
    axios.get("http://localhost:8080/api/v1/epigram").then(res => {
      console.log(res);
      setEpigramText(res.data);
    });
  };

  useEffect(() => {
    fetchEpigramText();
  }, []);

  return <div>{epigramText}</div>

};


function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <HeaderComponent />
      <header className='App-header'>
          <div className="App fst-italic">
            <EpigramText />
          </div>
          <div className='position-absolute top-50 start-50 translate-middle'>
            <Button variant="primary" size="lg" onClick={refreshPage}>
              Reload
            </Button>
          </div>
      </header>
      <div className="mb-2 text-center">
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
