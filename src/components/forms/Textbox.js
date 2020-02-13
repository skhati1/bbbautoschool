import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


export default function Textbox(props) {
  const [isEmpty, setIsEmpty] = React.useState(false);
  var customLabel = props.label
  if(props.required){
    customLabel += " *"
  }
  function textBoxChanged(e, props, setIsEmpty) {
    props.onChange(e.target.value)
      if(e.target.value.length > 0) {
        setIsEmpty(false)
      } else {
        setIsEmpty(true)
      }
  }

  return <TextField
      value={props.value}
      onChange={(e) => textBoxChanged(e, props, setIsEmpty)}
      id={props.id}
      label={customLabel}
      style={{ margin: 8}}
      variant="outlined"
      fullWidth
      error={props.required && isEmpty}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
}
