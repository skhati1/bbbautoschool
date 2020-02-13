import React from 'react';
import Textbox from '../forms/Textbox';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
}));

function getSteps() {
    return ['Select a Package', 'Student Information', 'Parent Information'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
            )
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}

function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => { setActiveStep(prevActiveStep => prevActiveStep + 1); };

    const handleBack = () => { setActiveStep(prevActiveStep => prevActiveStep - 1); };

    const handleReset = () => { setActiveStep(0); };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}

export default function DriversEd() {
    let stepper = VerticalLinearStepper();

    return <div class="container mx-auto">
        <h2 class="text-2xl lg:text-4xl font-semibold text-center">Driver's ED Registration</h2>
        <br />
        {stepper}
        <form class="w-full max-w-sm">
            <Textbox label="Full Name" value="" placeholder="Enter Full Name" for="full-name" required="true" />
            <Textbox label="Street Address" value="" placeholder="Enter Street Address" for="street-address" required="true" />
            <Textbox label="City" value="" placeholder="Enter City" for="city" required="true" />
            <Textbox label="Zip Code" value="" placeholder="Enter Zip Code" for="zip-code" required="true" />
        </form>
    </div>
}

function packageInfo() {

}
