import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button, TextField } from '@material-ui/core';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Radiobutton from './Radiobutton';
import Textfield from './Textfield';
import MyButton from './MyButton';
function Question() {
 
 const [question, setQuestion] = useState([]);
    
    useEffect(() => {
    fetchQuestions();
    }, []);

    /*
    const inputChanged = (event) => {
        setQuestion({...question, [event.target.name]: event.target.value});
    } */
 
 const fetchQuestions = () => {
    fetch('https://taitokysely.herokuapp.com/questions')
    .then(response => response.json())
    .then(data => setQuestion(data))
    .catch(err => console.error(err))
    console.log(question)
 }
 
 const addAnswer = () => {
    fetch('http://localhost:8080/answer', {
    method: 'POST',
    body: JSON.toString(),
    headers: { 'Content-type': 'application/json' }
    })
    //.then(_ => fetchQuestions())
    .catch(err => console.error(err))
 } 

//  const addAnswer = () => {
//   fetch('https://taitokysely.herokuapp.com/answer',
//   {
//     method: 'POST',
//     body: JSON.stringify(gender),
//     headers: { 'Content-type' : 'application/json' }
//   })
//   .catch(err => console.error(err))
// }
/* <TextField  type="text" onChange={e => e.target.value}/>
                    <Button onClick={addAnswer}>Lähetä vastaus </Button> */

 return (
 <div>
            
            
            
            <table align="center">
            <tbody>
              
              {
                question.map(questions =>
                  <tr key={questions.questionId}>
                    <td>{questions.questionName} <Textfield/></td>
                    
                  
                  </tr>)
                  
              }
              
            </tbody>
          </table>
 
 </div>
 );
}
 
export default Question;