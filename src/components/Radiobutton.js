import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import MyButton from './MyButton';

function Radiobutton() {

useEffect(() => {
}, []);

const [value, setValue] = React.useState('vastaus');
  
const handleChange = (event) => {
  setValue(event.target.value);
  console.log(event.target.value);
};

const addAnswer = () => {
  fetch('https://taitokysely.herokuapp.com/answer',
  {
    method: 'POST',
    body: JSON.stringify(value),
    headers: { 'Content-type' : 'application/json' }
  })
  .catch(err => console.error(err))
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
      <MyButton addAnswer={addAnswer} value={value}/>
    </div>
    );
  }

  export default Radiobutton;