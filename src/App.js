import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Button } from 'react-bootstrap';

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
      <header className='app-header'>
        <div className="App">
          <EpigramText />
        </div>
        <div className="mb-2 text-center position-absolute bottom-50 end-50">
          <Button variant="primary" size="lg" onClick={refreshPage}>
            Reload
          </Button>
        </div>
      </header>
      <FooterComponent />
    </div>
  );
}

export default App;
