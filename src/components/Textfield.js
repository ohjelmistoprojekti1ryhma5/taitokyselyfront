import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MyButton from './MyButton';

function Textfield() {
    
    const [text, setText] = useState('');

    const addAnswer = () => {
      fetch('https://taitokysely.herokuapp.com/answer',
      {
        method: 'POST',
        body: JSON.stringify(text),
        headers: { 'Content-type' : 'application/json' }
      })
      .catch(err => console.error(err))
    }

    return (
        <form>
            
            <TextField label="Vastaa tähän" value={text} onChange={e => setText(e.target.value)} />
            <MyButton addAnswer={addAnswer} value={text}/>
        </form>
      );
}

export default Textfield;