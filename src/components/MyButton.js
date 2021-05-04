import React from "react";
import Button from "@material-ui/core/Button";

function MyButton(props) {
  const handleSave = () => {
    console.log(props);
    props.addAnswer();
  };

  return (
    <div>
      <Button onClick={handleSave} color="primary">
        Tallenna
      </Button>
    </div>
  );
}

export default MyButton;
