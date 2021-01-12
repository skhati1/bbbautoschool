import React, { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Textbox from '../forms/Textbox';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DropDown from '../forms/Dropdown';
import Datepicker from '../forms/Datepicker'

import { VIEW } from '../Constants';
import { SendParentClassEmail } from '../helpers/Emailer';
import Validate from '../helpers/Validator';

const form_steps = ['Student Information', 'Parent Information'];


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    typography: {
        padding: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const privatePackageOptions = {
    "Full Package": "$699.00",
    "30 Hours Classroom Lessons": "$199.00",
    "12 Hours Driving Instruction": "$540.00"
}

const classAttendingOptions = {
    "Black Friday": "Black Friday",
    "Christmas Break": "Christmas Break",
    "February Break": "February Break",
    "April Break": "April Break",
    "Memorial Day Weekend": "Memorial Day Weekend",
    "4th Monday of June": "4th Monday of June",
    "2nd Monday of July": "2nd Monday of July",
    "4th Monday of July": "4th Monday of July",
    "2nd Monday of August": "2nd Monday of August",
    "4th Monday of August": "4th Monday of August",
    "Labor Day Weekend": "Labor Day Weekend",
    "Columbus Day Weekend": "Columbus Day Weekend"
}


const statesList = {
    AL: "AL",
    AK: "AK",
    AZ: "AZ",
    AR: "AR",
    CA: "CA",
    CO: "CO",
    CT: "CT",
    DE: "DE",
    FL: "FL",
    GA: "GA",
    HI: "HI",
    ID: "ID",
    IL: "IL",
    IN: "IN",
    IA: "IA",
    KS: "KS",
    KY: "KY",
    LA: "LA",
    ME: "ME",
    MD: "MD",
    MA: "MA",
    MI: "MI",
    MN: "MN",
    MS: "MS",
    MO: "MO",
    MT: "MT",
    NE: "NE",
    NV: "NV",
    NH: "NH",
    NJ: "NJ",
    NM: "NM",
    NY: "NY",
    NC: "NC",
    ND: "ND",
    OH: "OH",
    OK: "OK",
    OR: "OR",
    PA: "PA",
    RI: "RI",
    SC: "SC",
    SD: "SD",
    TN: "TN",
    TX: "TX",
    UT: "UT",
    VT: "VT",
    VA: "VA",
    WA: "WA",
    WV: "WV",
    WI: "WI",
    WY: "WY",
    DC: "DC",
    GU: "GU",
    MH: "MH",
    MP: "MP",
    PR: "PR",
    VI: "VI"
}


export default function ParentRegistration({ setChild }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = form_steps;
    const [formSubmittedCorrectly, setFormSubmittedCorrectly] = React.useState(false)

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            handleSubmit(setChild)
        }
        setActiveStep(activeStep => activeStep + 1);

    };
    const handleBack = () => { setActiveStep(activeStep => activeStep - 1); };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSubmit = async () => {
        var emailForm = {
            "Last Name": studentLastName,
            "First Name": studentFirstName,
            "Student Date of Birth": dob,
            "Student Permit Number": learnersPermit,
            "Parent / Guardian Last Name": parentLastName,
            "Parent / Guardian First Name": parentFirstName,
            "Parent / Guardian Street Address": streetAddress,
            "Parent / Guardian City": city,
            "Parent / Guardian Zip Code": zipCode,
            "Parent / Guardian Email": parentEmail,
            "Parent License State": parentLicenseState[0],
            "Parent License Number:": parentLicenseNumber,
        }

        var requiredFields = {
            "Last Name": studentLastName,
            "First Name": studentFirstName,
            "Student Date of Birth": dob,
            "Parent / Guardian Last Name": parentLastName,
            "Parent / Guardian First Name": parentFirstName,
            "Parent / Guardian Street Address": streetAddress,
            "Parent / Guardian City": city,
            "Parent / Guardian Zip Code": zipCode,
            "Parent / Guardian Email": parentEmail,
            "Parent License State": parentLicenseState[0],
            "Parent License Number:": parentLicenseNumber
        }

        var invalidItems = Validate(requiredFields)
        if (invalidItems.length === 0) {
            var condition = await SendParentClassEmail(emailForm)
            if (condition) {
                setFormSubmittedCorrectly(true)
            } else {
                alert("Submitting Registration. Please try again or give us a call!")
                setFormSubmittedCorrectly(false)
                handleBack()
            }
        }
        else {
            var errorItem = "Please fill out the following items and try again: \n"
            for (var item in invalidItems) {
                errorItem += invalidItems[item] + "\n"
            }
            alert(errorItem)
            setFormSubmittedCorrectly(false)
            handleBack()
        }
    }

    const [studentLastName, setStudentLastName] = useState('')
    const [studentFirstName, setStudentFirstName] = useState('')
    const [dob, setDob] = useState('')
    const [learnersPermit, setLearnersPermit] = useState('')
    const [parentLastName, setParentLastName] = useState('')
    const [parentFirstName, setParentFirstName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [parentEmail, setParentEmail] = useState('')
    const [parentLicenseState, setParentLicenseState] = useState(['', ''])
    const [parentLicenseNumber, setParentLicenseNumber] = useState('')

    return <div>
        <DialogTitle className="text-center">Parent Class Online Registration</DialogTitle>

        <DialogContent>
            <div className="text-center">Please use the following form to register for our Parent Class!</div>

            <div className="container mx-auto">
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>
                                        {(() => {
                                            switch (index) {
                                                case 0:
                                                    return (<div className={classes.root}>
                                                        <Textbox required fullWidth={true} value={studentFirstName} id='studentFirstName' label='Student First Name' onChange={val => setStudentFirstName(val)} />

                                                        <Textbox required value={studentLastName} id='studentLastName' label='Student Last Name' onChange={val => setStudentLastName(val)} />

                                                        <Datepicker required value={dob} id='dob' label='Date of Birth' onChange={val => setDob(val)} />

                                                        <Textbox value={learnersPermit} id='learnersPermit' label="Learner's Permit Number" onChange={val => setLearnersPermit(val)} fullWidth={true} />                                                     

                                                    </div>
                                                    );
                                                case 1:
                                                    return (<span>
                                                        <Textbox required value={parentFirstName} id='parentFirstName' label="Parent / Guardian First Name" onChange={val => setParentFirstName(val)} />

                                                        <Textbox required value={parentLastName} id='parentName' label="Parent / Guardian Last Name" onChange={val => setParentLastName(val)} />

                                                        <Textbox required value={streetAddress} id='streetAddress' label='Parent / Guardian Street Address' onChange={val => setStreetAddress(val)} />

                                                        <Textbox required value={city} id='city' label='Parent / Guardian City' onChange={val => setCity(val)} />

                                                        <Textbox required value={zipCode} id='zipCode' label='Parent / Guardian Zip Code' onChange={val => setZipCode(val)} />

                                                        <Textbox required value={parentEmail} id='parentEmail' label='Parent Email' onChange={val => setParentEmail(val)} />

                                                        <div>
                                                            <span style={{ paddingLeft: "1vh", verticalAlign: "baseline" }}>Parent License State</span>
                                                            <DropDown required options={statesList} value={parentLicenseState} id='parentLicenseState' label='Parent License State' onChange={val => setParentLicenseState(val)} />
                                                        </div>

                                                        <Textbox required value={parentLicenseNumber} id='parentLicenseNumber' label='Parent License Number' onChange={val => setParentLicenseNumber(val)} />

                                                        </span>
                                                    );
                                                default:
                                                    return 'Unknown step';
                                            }
                                        })()}
                                    </Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}> Back </Button>
                                            <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}> {activeStep === steps.length - 1 ? 'Submit' : 'Next'} </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {formSubmittedCorrectly && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Thank you for your registration. Someone will reach out to you via phone or email within the next 24 hours.</Typography>
                        </Paper>
                    )}
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <button onClick={() => setChild(false, VIEW.NONE)} type="button"
                className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
                Close
            </button>
        </DialogActions>
    </div>
}