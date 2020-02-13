import React from 'react';
import TextField from '@material-ui/core/TextField';

function textBoxChanged(e, props) {
    props.onChange(e, props)
}

export default function Datepicker(props) {
    return (
        <TextField
            id={props.id}
            label={props.label}
            type="date"
            style={{ margin: 8 }}
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true
            }}
            onChange={(e) => textBoxChanged(e, props)}
        />
    );
}