import React, { useState, useEffect } from 'react';
import Textfield from './Textfield';

function Question() {
 
  const [question, setQuestion] = useState([]);
    
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    fetch('https://taitokysely.herokuapp.com/questions')
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
                <td>{questions.questionName} <Textfield/></td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}
 
export default Question;