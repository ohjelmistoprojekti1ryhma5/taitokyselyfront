import React from 'react';
import Button from '@material-ui/core/Button';

function AddAnswer(props){
    const [answer, setAnswer] = React.useState({
        answerName: '',
    })

    const handleSave = () => {
        console.log(props)
        setAnswer({answerName: props.value})
        props.addNewAnswer(answer)
        }

    /*const inputChanged = (event) => {
            setAnswer('ei')
        }*/
    
    return(
        <div>
            <Button onClick={handleSave} value={answer.answerName}  color="primary">
              Tallenna
            </Button>
        </div>
    )
}

export default AddAnswer;
