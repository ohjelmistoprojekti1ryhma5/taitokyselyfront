import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MyButton from './MyButton';
import RadiobuttonSex from './RadiobuttonSex';

function Radiobutton() {

  const [value, setValue] = useState('vastaus');
    
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const addAnswer = () => {
    fetch('http://localhost:8080/answer',
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
          <FormLabel component="legend"></FormLabel>
          <RadioGroup aria-label="vastaus" name="vastaus" value={value} onChange={handleChange}>
            <FormControlLabel value="Kyllä" control={<Radio />} label="Kyllä" />
            <FormControlLabel value="En" control={<Radio />} label="En" />
          </RadioGroup>
        </FormControl>

        <RadiobuttonSex/>
        <MyButton addAnswer={addAnswer} value={value}/>
      </div>
      );
  }

  export default Radiobutton;