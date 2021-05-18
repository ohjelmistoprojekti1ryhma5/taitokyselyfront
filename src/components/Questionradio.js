import React, { useState, useEffect } from 'react';
import Radiobutton from './Radiobutton';

function Questionradio() {
 
    const [question, setQuestion] = useState([]);
    
    useEffect(() => {
        fetchQuestions();
    }, []);
 
    const fetchQuestions = () => {
        fetch('http://localhost:8080/survey/15')
        .then(response => response.json())
        .then(data => setQuestion(data))
        .catch(err => console.error(err))
    }
 
    return (
        <div>
            <table align="center">
             <tbody>
                {
                 question.map(questions =>
                  <tr key={questions.questionId}>
                     <td>{questions.questionName} <Radiobutton/></td>   
                  </tr>)
                }
             </tbody>
            </table>
        </div>
    );
}

export default Questionradio;