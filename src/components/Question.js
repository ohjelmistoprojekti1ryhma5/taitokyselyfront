import React, { useState, useEffect } from 'react';
import Textfield from './Textfield';
import MyButton from './MyButton';

function Question() {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    fetch('https://taitokysely.herokuapp.com/survey/57')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(err => console.error(err))
  }

  function Joku(questionId, answerValue) {
    const existingAnswerForQuestionIndex = answers.findIndex((answer) => answer.questionId === questionId)
    let newAnswers = [...answers] // Kopioidaan edelliset vastaukset
    
    if (existingAnswerForQuestionIndex !== -1) {
      newAnswers[existingAnswerForQuestionIndex].answer = answerValue
    } else {
      newAnswers = [...newAnswers, {
        questionId,
        answer: answerValue,
      }]
    }

    setAnswers(newAnswers)
  }

  const addAnswer = () => {
    fetch('https://taitokysely.herokuapp.com/answers',
      {
        method: 'POST',
        body: JSON.stringify(answers.map(({ answer, questionId }) => ({
          // Muotoillaan lähetettävä JSON
          answerName: answer,
          question: {
            questionId
          }
        }))),
        headers: { 'Content-type': 'application/json' }
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <table align="center">
        <tbody>
          {
            questions.map(question => {
              const answerObject = answers.find((answer) => answer.questionId === question.questionId)
              const answerValueString = answerObject ? answerObject.answer : ''
              return (
                <tr key={question.questionId}>
                  <td>{question.questionName} <Textfield value={answerValueString} onChange={(answerValue) => Joku(question.questionId, answerValue)} /></td>
                </tr>
              )
            })
          }
          <MyButton addAnswer={addAnswer} />
        </tbody>
      </table>
    </div>
  );
}

export default Question;