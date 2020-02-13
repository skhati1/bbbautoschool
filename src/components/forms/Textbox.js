import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


export default function Textbox(props) {
  const [isEmpty, setIsEmpty] = React.useState(false);

  function textBoxChanged(e, props, setIsEmpty) {
    props.onChange(e.target.value)
    if(e.target.value) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
    
  }

  return <TextField
      value={props.value}
      onChange={(e) => textBoxChanged(e, props, setIsEmpty)}
      id={props.id}
      label={props.label}
      style={{ margin: 8}}
      variant="outlined"
      fullWidth
      error={isEmpty}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
}
