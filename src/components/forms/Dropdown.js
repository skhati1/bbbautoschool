import React, { useState } from 'react';

export default function Dropdown(props) {
    const [value, setValue] = useState(props.value)

    let forLabel = "inline-" + props.for

    return <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example</Form.Label>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <Form.Control as="select">
        {props.options.map((item) => <option key={"item-" + item}>{item}</option>)}
        </Form.Control>
    </Form.Group>
}
