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

export default function PhoneNumberTextBox(props) {
    const [isEmpty, setIsEmpty] = React.useState(false);
    var customLabel = props.label
    if (props.required) {
        customLabel += " *"
    }
    function textBoxChanged(e, props, setIsEmpty) {
        var val = addDashes(e.target.value)
        props.onChange(val)
        if (val.length > 0) {
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
        style={{ margin: 8 }}
        variant="outlined"
        error={props.required && isEmpty}
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
    />
}
