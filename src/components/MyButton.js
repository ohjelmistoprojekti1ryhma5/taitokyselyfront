import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

function MyButton(props) {
    
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);

    const handleSave = () => {
        console.log(props)
        props.addAnswer()
        setMsg('Tallentaminen onnistui');
        openSnackBar();
    }

    const openSnackBar = () => {
        setOpen(true)
      }
    
    const closeSnackBar = () => {
        setOpen(false)
    }

    return(
        <div>
            <Button onClick={handleSave} color="primary">
              Tallenna
            </Button>
            <Snackbar 
                open={open}
                message={msg}
                autoHideDuration={2500}
                onClose={closeSnackBar}
            />
        </div>
    )
}

export default MyButton;
