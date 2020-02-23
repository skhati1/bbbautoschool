import React from 'react';
import TextField from '@material-ui/core/TextField';

function textBoxChanged(event, props) {
    props.onChange(event.target.value, props)
}

export default function Datepicker(props) {
    var customLabel = props.label
    if (props.required) {
        customLabel += " *"
    }
    return (
        <TextField
            id={props.id}
            label={customLabel}
            type="date"
            style={{ margin: 8 }}
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true
            }}
            onChange={(event) => textBoxChanged(event, props)}
        />
    );
}