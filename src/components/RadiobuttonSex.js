import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MyButton from './MyButton';

function RadiobuttonSex() {
    
  const [gender, setGender] = useState('sukupuoli');

  const handleChange = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };

  const addAnswer = () => {
    fetch('https://taitokysely.herokuapp.com/answer',
    {
      method: 'POST',
      body: JSON.stringify(gender),
      headers: { 'Content-type' : 'application/json' }
    })
    .catch(err => console.error(err))
  }

    return(
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Sukupuolesi?</FormLabel>
                <RadioGroup aria-label="sukupuoli" name="sukupuoli" value={gender} onChange={handleChange}>
                    <FormControlLabel value="Mies" control={<Radio />} label="Mies" />
                    <FormControlLabel value="Nainen" control={<Radio />} label="Nainen" />
                </RadioGroup>
            </FormControl>
            <MyButton addAnswer={addAnswer} value={gender}/>
        </div>
    );
}

    export default RadiobuttonSex;