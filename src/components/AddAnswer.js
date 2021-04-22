import React from 'react';
import Button from '@material-ui/core/Button';

function AddAnswer(props){
    const [answer, setAnswer] = React.useState({
        answerName: '',
    })

    const handleSave = () => {
        props.addNewAnswer(answer)
        }

    const inputChanged = (event) => {
            setAnswer({...answer, [event.target.name]: event.target.value})
        }
    
    return(
        <div>
            <Button onClick={handleSave} value={answer.answerName} onChange={inputChanged} color="primary">
              Tallenna
            </Button>
        </div>
    )
}

export default AddAnswer;
