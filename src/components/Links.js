import React from 'react';
import links from '../data/links.json';


import JOL from '../data/jol.jpg'
import CommonReasons from '../data/road_test_failure.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const centerLinks = {
  "margin": "0 auto"
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Links() {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [imageToShow, setImageToShow] = React.useState('');

  const handleClickOpen = imageName => () => {
    setOpen(true);
    setImageToShow(imageName);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return <div>

    <table className="table text-center" style={centerLinks}>

      <tbody>
        {links.map(item =>
          (
            <tr key={item.text}>
              <td><a href={item.link} target="_blank">{item.text}</a></td>
            </tr>
          ))
        }
        <tr key="CommonReasons">
          <td><a href={CommonReasons} target="_blank">Common Reasons for Road Test Failures</a></td>
        </tr>

        <tr key="JOL">
          <td><a href={JOL} target="_blank">JOL Fine and Penalty</a></td>
        </tr>
      </tbody>
    </table>
  </div>
};

