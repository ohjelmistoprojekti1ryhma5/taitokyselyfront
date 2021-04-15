
import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Radiobutton from './components/Radiobutton';

function App() {

const [answer, setAnswer] = React.useState('');
const [question, setQuestion] = React.useState('');

useEffect(() => {
  fetchApi();
}, []);

const fetchApi = () => {
  fetch("https://taitokysely.herokuapp.com/")
  .then(response => response.json())
  .then(data => {
  setAnswer(data._links.answers.href);
  //setQuestion(data._links.self.href);
  })
  
}

  return (
    <div className="App">
      <h1>{answer}</h1>
      <h1>{question}</h1>
      <Radiobutton/>
    </div>
  );
}

export default App;
