import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import AddAnswer from './AddAnswer';

function Radiobutton() {
    
const [answers, setAnswers] = React.useState('');
const [question, setQuestion] = React.useState('');

useEffect(() => {
  //fetchApi();
  fetchQuestion();
  fetchAnswer();
}, []);

const [value, setValue] = React.useState('vastaus');
  
const handleChange = (event) => {
  setValue(event.target.value);
  console.log(event.target.value);
};

const fetchQuestion = () => {
  fetch('https://taitokysely.herokuapp.com/questions')
  .then(response => response.json())
  .then(data => {
    setQuestion(data._embedded.questions[0].name);
  })
  .catch(err => console.error(err))
};

const fetchAnswer = () => {
  fetch('https://taitokysely.herokuapp.com/answers')
  .then(response => response.json())
  .then(data => {
    setAnswers(data[0].answerName);
  })
  .catch(err => console.error(err))
};

// Vastauksen post-kokeilua, ei toiminnassa ************

const addNewAnswer = (newAnswer) => {
  console.log(newAnswer)
  fetch('https://taitokysely.herokuapp.com/save',
  {
    method: 'POST',

    body: JSON.stringify(newAnswer),
    headers: { 'Content-type' : 'application/json' }
  })
  .then(_ => fetchAnswer())
  .catch(err => console.error(err))
}

// Testi fetchaus dataa varten *****************

/*const fetchApi = () => {
  fetch("https://taitokysely.herokuapp.com/")
  .then(response => response.json())
  .then(data => {
  setAnswer(data._links.answers.href);
  //setQuestion(data._links.self.href);
  })
}*/

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Piditkö kyselystä?</FormLabel>
        <RadioGroup aria-label="vastaus" name="vastaus" value={value} onChange={handleChange}>
          <FormControlLabel value="kyllä" control={<Radio />} label="Kyllä" />
          <FormControlLabel value="en" control={<Radio />} label="En" />
        </RadioGroup>
      </FormControl>
      <div>{answers}</div>
      <div>{question}</div>
      <AddAnswer addNewAnswer={addNewAnswer} value={value}/>
    </div>
    );
  }

  export default Radiobutton;