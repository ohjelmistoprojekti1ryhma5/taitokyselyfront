import React, { useEffect, useState } from 'react';
import './App.css';
import Radiobutton from './components/Radiobutton';

function App() {

const [answer, setAnswer] = useState('');
const [question, setQuestion] = useState('');

useEffect(() => {
  fetchApi();
}, []);

const fetchApi = () => {
  //fetch('https://jsonplaceholder.typicode.com/todos/1')
  fetch('https://taitokysely.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json))
  //setAnswer(data._links.answers.href);
  //setQuestion(data._links.questions.href);
  .catch(err => console.error(err))
}

  return (
    <div className="App">
      <h1>{answer}</h1>
      <h1>{question}</h1>
      <Radiobutton />
    </div>
  );
}

export default App;