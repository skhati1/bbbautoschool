import React from 'react';
import TextField from '@material-ui/core/TextField';

function textBoxChanged(e, props) {
    props.onChange(e, props)
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
            onChange={(e) => textBoxChanged(e, props)}
        />
    );
}