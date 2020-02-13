import React from 'react';
import TextField from '@material-ui/core/TextField';

function addDashes(item) {
    var num = item.replace(/-/g, "");

    var parts = [num.slice(0, 3), num.slice(3, 6), num.slice(6, 10)];

    var fNum = "";
    if (parts[2]) { fNum = parts[0] + "-" + parts[1] + "-" + parts[2]; }
    else if (parts[1]) { fNum = parts[0] + "-" + parts[1]; }
    else { fNum = parts[0]; }

    return fNum;
}

function textBoxChanged(e, props) {
    var val = addDashes(e.target.value)
    props.onChange(val)
}

export default function PhoneNumberTextBox(props) {
    var customLabel = props.label
    if (props.required) {
        customLabel += " *"
    }
    return <TextField
        value={props.value}
        onChange={(e) => textBoxChanged(e, props)}
        id={props.id}
        label={customLabel}
        style={{ margin: 8 }}
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
    />
}
