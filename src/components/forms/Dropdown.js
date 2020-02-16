import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';

export default function Dropdown(props) {
    const reportChange = (e) => {
        if(e.target.value){
            var value = e.target.value
            var key = ""
            for(var i in props.options){
                if(props.options[i] == value){
                    key = i
                }
            }
            props.onChange([key, value]);
        }
    }

    const options = Object.keys(props.options).map(kvp =>
        <MenuItem value={props.options[kvp]}>{kvp}</MenuItem>
    );
    return <Select value={props.value[1]} onChange={(e) => reportChange(e)}>{options}</Select>
}
