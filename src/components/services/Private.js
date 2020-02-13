import React, { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Textbox from '../forms/Textbox';

import { VIEW } from '../Constants';

function formSubmitted(setChild){
  setChild(false, VIEW.NONE)
}

export default function Private({ setChild }) {
  console.log({ setChild })

  const [studentFirstName, setStudentFirstName] = useState('')
  const [studentLastName, setStudentLastName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  const [homePhone, setHomePhone] = useState('')
  const [studentCellPhone, setStudentCellPhone] = useState('')
  const [bestTimeToCall, setBestTimeToCall] = useState('')
  const [learnersPermit, setLearnersPermit] = useState('')
  const [dob, setDob] = useState('')
  const [startingDate, setStartingDate] = useState('')
  const [comments, setComments] = useState('')

  return <div>
    <DialogTitle>Private Lesson Registration</DialogTitle>

    <DialogContent>
      <div>Please use the following form to register for our Private Lessons!</div>
      <br />
      <form>
        <Textbox value={studentFirstName}
          id='studentFirstName'
          label='Student First Name'
          onChange={(val) => setStudentFirstName(val)} />

        <Textbox value={studentLastName}
          id='studentLastName'
          label='Student Last Name'
          onChange={(val) => setStudentLastName(val)} />

        <br /><br />

        <Textbox value={streetAddress}
          id='streetAddress'
          label='Street Address'
          onChange={(val) => setStreetAddress(val)}
          fullWidth={true} />

        <Textbox value={city}
          id='city'
          label='City'
          onChange={(val) => setCity(val)} />

        <Textbox value={zipCode}
          id='zipCode'
          label='Zip Code'
          onChange={(val) => setZipCode(val)} />

        <br /><br />

        <Textbox value={studentEmail}
          id='studentEmail'
          label='Student Email'
          onChange={(val) => setStudentEmail(val)} />

        <Textbox value={dob}
          id='dob'
          label='Date Of Birth'
          onChange={(val) => setDob(val)} />


        <Textbox value={studentCellPhone}
          id='studentCellPhone'
          label='Student Cell Phone'
          onChange={(val) => setStudentCellPhone(val)} />


        <Textbox value={homePhone}
          id='homePhone'
          label='Home Phone'
          onChange={(val) => setHomePhone(val)} />

          <br /><br />

        <Textbox value={bestTimeToCall}
          id='bestTimeToCall'
          label='Best TIme To Call'
          onChange={(val) => setBestTimeToCall(val)} />

        <Textbox value={learnersPermit}
          id='learnersPermit'
          label="Learner's Permit Number"
          onChange={(val) => setLearnersPermit(val)} />

        <Textbox value={startingDate}
          id='startingDate'
          label='Starting Date'
          onChange={(val) => setStartingDate(val)} />

        <Textbox value={comments}
          id='comments'
          label='Comments'
          onChange={(val) => setComments(val)} />


      </form>
    </DialogContent>
    <DialogActions>
      <button onClick={() => setChild(false, VIEW.NONE)} type="button"
        className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
        Cancel
      </button>
      <button onClick={() => formSubmitted(setChild)} type="button"
        className={`py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white`}>
        Submit
      </button>
    </DialogActions>
  </div>
}