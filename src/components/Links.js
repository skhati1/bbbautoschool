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
            <tr key={item.link}>
              <td><a href={item.link} target="_blank">{item.text}</a></td>
            </tr>
          ))
        }
        <div>
          <Button color="primary" onClick={handleClickOpen('common')}>Common Reasons for Road Test Failures</Button>
          <br />
          <Button color="primary" onClick={handleClickOpen('jol')}>JOL Fine and Penalty</Button>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6">
                  {imageToShow === 'common' && "Common Reasons for Road Test Failure"}
                  {imageToShow === 'jol' && "JOL Penalty and Fine"}
                </Typography>
              </Toolbar>
            </AppBar>
            <div>
              {imageToShow === 'common' &&
                <img src={CommonReasons} alt='Common Reasons for Road Test Failure' vspace='70' width='70%' />
              }

              {imageToShow === 'jol' &&
                <img src={JOL} alt='JOL Penalty and Fine' vspace='70' width='70%' />
              }
            </div>
          </Dialog>
        </div>

      </tbody>
    </table>
  </div>
};

