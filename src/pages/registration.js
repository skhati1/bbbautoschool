import React from 'react';
import logo from '../images/logo.png';

export default class Pricing extends React.Component {
    render() {
        const body = {
            height: '842px',
            width: '800px',
            marginLeft: '50px'
        }
        const alignText = {
            textAlign: 'center',
            marginBottom: '0'
        }
        const table = {
            marginLeft: '20px'
        }
        const boldFont = {
            fontWeight: 'bold'
        }
        const inputStyle = {
            border: '0',
            outline: '0',
            background: 'transparent',
            borderBottom: '2px solid black',
            marginBottom: '5px',
            flex: '1'
        }
        const trStyle = {
            marginBottom: '200px'
        }
        const flexContainer = {
            width: '750px',
            display: 'flex'
        }
        const fillWidth = {
            flex: '1'
        }
        return (
            <div style={body}>
                <div style={alignText}>
                    <div style={boldFont}>
                        <br />
                        <h4 style={{ marginRight: '12px' }}> BBB Auto School
                            <br />
                            Taunton, MA 02780
                            <br />
                            Tel: (508)-880-3333
                            <br style={{ marginBottom: '5px' }} />
                            REGISTRATION CONTRACT <br />
                        </h4>
                    </div>
                </div>
                <div style={{ marginTop: '10px', width: '100%' }} >
                    <br />
                    <div style={flexContainer}>
                        <label>Student's Name:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Parent's Name:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Address:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        City: &nbsp; <input style={inputStyle} type="text" /> &nbsp;
                        State: &nbsp; <input style={inputStyle} type="text" /> &nbsp;
                        Zip Code: &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Student's Email Address:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        Home Phone: &nbsp; <input style={inputStyle} type="text" /> &nbsp;
                        &nbsp; Student's Cell Phone: <input style={inputStyle} type="text" /><br />
                    </div>
                    <div style={flexContainer}>
                        <label>Best Time To Call: </label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Parent's Phone No:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Learner's Permit #:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        Date of Birth: &nbsp; <input style={inputStyle} type="text" />
                        &nbsp;  Starting Date: <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Notes:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>

                    <p style={{ marginTop: '5px', marginBottom: '5px', fontWeight: 'bold', textDecoration: 'underline' }}>Please Select Purchased Program</p>

                    <table style={table}>
                        <tr style={trStyle}>
                            <td>
                                <div style={{ marginBottom: '5px' }}>
                                    <span>1. &emsp; Driver's ED Full Program</span>
                                    <br style={{ marginBottom: '5px' }} />
                                    &emsp; &emsp; &emsp;a. &emsp; 30 Hours of Class Lessons <br />
                                    &emsp; &emsp; &emsp;b. &emsp; 12 Hours of Driving Lessons<br />
                                    &emsp; &emsp; &emsp;c. &emsp; 6 Hours of Observations<br />
                                    &emsp; &emsp; &emsp;d. &emsp; 2 Hours of Parent Class<br />
                                </div>
                            </td>
                        </tr>
                        <tr style={trStyle}>
                            <td>2. &emsp; 30 Hours of Classroom Lessons</td>
                        </tr>
                        <tr style={trStyle}>
                            <td>3. &emsp; 12 Hours of Driving Instructions</td>
                        </tr>
                        <tr style={trStyle}>
                            <td>4. &emsp; 6 Hours of Driving Lessons</td>
                        </tr>
                        <tr style={trStyle}>
                            <td>5. &emsp; 1 Hour Lesson</td>
                        </tr>
                        <tr style={trStyle}>
                            <td>
                                <div>
                                    6. &emsp; Road Test Sponsorship Fee  <br />
                                    &emsp;&emsp; At the Driving School or RMV Taunton, MA Location
				                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <br />
                <div>
                    <span style={boldFont}>I have read and agree to these terms:</span><br /><br />
                    <div style={flexContainer}>
                        <label>Student Signature:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <div style={flexContainer}>
                        <label>Parent Signature:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div> 
                    <div style={flexContainer}>
                        <label>Date:</label> &nbsp; <input style={inputStyle} type="text" />
                    </div>
                    <br />
                   
                    <div style={flexContainer}>
                            Office Use only: Date Paid &nbsp;<input style={inputStyle} type="text" />
                            &nbsp; Amount Paid: <input style={inputStyle} type="text" />
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}