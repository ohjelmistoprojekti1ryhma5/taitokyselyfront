import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Radiobutton() {
    
const [answer, setAnswer] = React.useState('');
const [question, setQuestion] = React.useState('');

useEffect(() => {
  fetchApi();
}, []);

const [value, setValue] = React.useState('vastaus');
  
const handleChange = (event) => {
  setValue(event.target.value);
  console.log(event.target.value);
};

const fetchApi = () => {
  fetch("https://taitokysely.herokuapp.com/")
  .then(response => response.json())
  .then(data => {
  setAnswer(data._links.answers.href);
  //setQuestion(data._links.self.href);
  })
}
  
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Piditkö kyselystä?</FormLabel>
        <RadioGroup aria-label="vastaus" name="vastaus" value={value} onChange={handleChange}>
          <FormControlLabel value="kyllä" control={<Radio />} label="Kyllä" />
          <FormControlLabel value="en" control={<Radio />} label="En" />
        </RadioGroup>
      </FormControl>
    </div>
    );
  }

  export default Radiobutton;