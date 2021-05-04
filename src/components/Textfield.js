import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Textfield() {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChange = () => {
    setAnswer([text, ...answer]);
    console.log(text);
  };

  return (
    <form>
      <h2>Anna palautetta!</h2>
      <TextField
        label="Vastaa tähän"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleChange} variant="contained" color="primary">
        Tallenna
      </Button>
    </form>
  );
}

export default Textfield;
