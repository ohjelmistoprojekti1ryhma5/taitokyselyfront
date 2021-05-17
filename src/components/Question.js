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
    fetch('http://localhost:8080/survey/15')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(err => console.error(err))
  }

  function Joku(questionId, answerValue) {
    const existingAnswerForQuestionIndex = answers.findIndex((answer) => answer.questionId === questionId)
    let newAnswers = [...answers] // copies the existing answers array

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

  /* 
  {    {
        "answerName": "Vastaus1",
        "question": {
            "questionId": 1,
        }
    answer: 
    question: {
      questionId: xx
    }
  }
  */

  const addAnswer = () => {
    fetch('http://localhost:8080/answers',
      {
        method: 'POST',
        body: JSON.stringify(answers.map(({ answer, questionId }) => ({
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