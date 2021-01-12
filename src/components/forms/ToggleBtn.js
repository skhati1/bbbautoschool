import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(theme => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));

export default function ToggleButtons(props) {

    const handleAlignment = (event, newVal) => {
        if (newVal !== null) {
            props.setValue(newVal);
        }
    };

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item sm={18} md={6}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup
                        value={props.value}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="Toggle Button Yes or No">
                            <ToggleButton value={false} aria-label="no">No</ToggleButton>
                            <ToggleButton value={true} aria-label="yes">Yes</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
        </Grid>
    );
}