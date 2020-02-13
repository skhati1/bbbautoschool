import React from 'react';
import faq from '../data/faq.json';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Faqs extends React.Component {
  
  render() {
    return <div>
      <TableContainer component={Paper}>
      <Table className="table" aria-label="FAQ table">
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {faq.map(row => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell >{row.answer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  }
};

