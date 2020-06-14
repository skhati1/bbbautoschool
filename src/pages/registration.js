import React from 'react';
import logo from '../images/logo.png';

export default class Pricing extends React.Component {
    render() {
        const body = {
            height: '842px',
            width: '625px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        const alignText = {
            textAlign: 'center',
            marginBottom: '0'
        }
        const boldFont = {
            fontWeight: 'bold'
        }
        const inputStyle = {
            border: '0',
            outline: '0',
            background: 'transparent',
            borderBottom: '2px solid black',
            marginBottom: '5px'
        }
        return (
            <div style={body}>
                <div style={alignText}>
                    <div style={boldFont}>
                        <br />
                        <h4> BBB Auto School
                            <br />
                            Taunton, MA 02780
                            <br />
                            Tel: (508)-880-3333
                            <br style={{ marginBottom: '5px' }} />
                            Registration Contract
                        </h4>
                    </div>
                </div>

                <div style={{ marginTop: '5px' }} >

                    Student's Name: &nbsp; <input style={inputStyle} type="text" size='50' /> <br />

		Parent's Name: &nbsp; <input style={inputStyle} type="text" size='51' /> <br />

		Address: &nbsp; <input style={inputStyle} type="text" size='57' /> <br />
		City: &nbsp; <input style={inputStyle} type="text" size='20' />
		State: &nbsp; <input style={inputStyle} type="text" size='12' />
		Zip Code: &nbsp; <input style={inputStyle} type="text" size='6' /> <br />

		Student's Email Address: &nbsp; <input style={inputStyle} type="text" size='44' /> <br />

		Home Phone: &nbsp; <input style={inputStyle} type="text" size='15' />
		&nbsp; Student's Cell Phone: <input style={inputStyle} type="text" size='16' /><br />

		Best Time To Call: &nbsp; <input style={inputStyle} type="text" size='49' /> <br />


		Parent's Phone No: &nbsp; <input style={inputStyle} type="text" size='48' /> <br />


		Learner's Permit #: &nbsp; <input style={inputStyle} type="text" size='48' /> <br />

		Date of Birth: &nbsp; <input style={inputStyle} type="text" size='18' />
		&nbsp;  Starting Date: <input style={inputStyle} type="text" size='18' /> <br />

		Notes: &nbsp; <input style={inputStyle} type="text" size='57' />
                    <br />
                    <p style={{ marginTop: '5px', marginBottom: '5px', fontWeight: 'bold' }}>Please Select Purchased Program</p>

                    <table>
                        <tr>
                            <td>
                                <div style={{marginBottom: '5px'}}>
                                    <span>1. Driver's ED Full Program</span>
                                    <br />
                                    - 30 Hours of Class Lessons <br />
                                    - 12 Hours of Driving Lessons<br />
                                    - 6 Hours of Observations<br />
                                    - 2 Hours of Parent Class<br />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2. 30 Hours of Classroom Lessons</td>
                        </tr>
                        <tr>
                            <td>3. 12 Hours of Driving Instructions</td>
                        </tr>
                        <tr>
                            <td>4. 6 Hours of Driving Lessons</td>
                        </tr>
                        <tr>
                            <td>5. 1 Hour Lesson</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    6. Road Test Sponsorship Fee  <br />
                                    - At the Driving School or RMV Taunton, MA Location
				                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={{ marginTop: '5px', marginBottom: '5px' }}>
                    <span style={boldFont}>I have read and agree to these terms:</span><br style={{ marginBottom: '3px'}}/>
                    Student Signature: &nbsp; <input style={inputStyle} type="text" size='49' /> <br />
                    Parent Signature: &nbsp; <input style={inputStyle} type="text" size='49' /> <br />
                    Date: &nbsp; <input style={inputStyle} type="text" size='45' /> <br /><br />

                    Office Use only: Date Paid&nbsp;
                            <input style={inputStyle} type="text" size='18' />
                            &nbsp; Amount Paid: <input style={inputStyle} type="text" size='10' />
                    <br /><br />
                </div>
            </div>
        );
    }
}