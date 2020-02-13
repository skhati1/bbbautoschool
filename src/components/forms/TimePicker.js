import React from 'react';
import TextField from '@material-ui/core/TextField';

function textBoxChanged(e, props) {
    props.onChange(e, props)
}

export default function TimePicker(props) {
    return (
        <TextField
            id={props.id}
            label={props.label}
            type="time"
            style={{ margin: 8 }}
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => textBoxChanged(e, props)}
        />
  );
}
