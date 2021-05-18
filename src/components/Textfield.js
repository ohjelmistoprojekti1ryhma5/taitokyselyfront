import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MyButton from './MyButton';

function Textfield({ onChange, answerValue }) {

  return (
    <form>
      <TextField label="Vastaa tähän" value={answerValue} onChange={event => onChange(event.target.value)} />
    </form>
  );
}

export default Textfield;