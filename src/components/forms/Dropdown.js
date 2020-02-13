import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';

export default function Dropdown(props) {
    //{props.options.map((item) => <option key={"item-" + item}>{item}</option>)}
    return <Select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        >
            {
            Object.keys(props.options).forEach(function(key) {
                <MenuItem value={key}>{props.options[key]}</MenuItem>
                console.log(key, props.options[key]);
            })}
    </Select>
}
