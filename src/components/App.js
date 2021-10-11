import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Button,
  Container,
  Typography,
  makeStyles,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import utils from '../utils';
import firebase from 'firebase/app';
import 'firebase/analytics';

const { generateHeaderText, generateBodyText, generateButtonText } = utils;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: '0 75px',
    padding: '25px',
  },
  title: {
    margin: '20px 0',
  },
  body: {
    minHeight: '150px',
  },
  text: {
    margin: '15px 0',
  },
  nextButton: {
    marginTop: '20px',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  madeWithLove: {
    flexGrow: 1,
  },
}));

const firebaseConfig = {
  apiKey: 'AIzaSyCZuvvXaXQ10e0VZb8T2izGGNEGCUAkUCI',
  authDomain: 'dnd-site-3726c.firebaseapp.com',
  projectId: 'dnd-site-3726c',
  storageBucket: 'dnd-site-3726c.appspot.com',
  messagingSenderId: '470782595057',
  appId: '1:470782595057:web:a1a98df0d3c91faa49fe50',
  measurementId: 'G-08WC0M6YBJ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

const App = () => {
  useEffect(() => {
    analytics.logEvent('page_load');
  }, []);

  const classes = useStyles();

  const [header, setHeader] = useState(generateHeaderText());
  const [body, setBody] = useState(generateBodyText());
  const [anotherText, setAnotherText] = useState(generateButtonText());

  const getAnother = () => {
    analytics.logEvent('button_click');
    setHeader(generateHeaderText());
    setBody(generateBodyText());
    setAnotherText(generateButtonText());
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          What D&D character should I make?
        </Typography>
        <Typography variant="h2" className={classes.text}>
          {header}
        </Typography>
        <div className={classes.body}>
          <Typography variant="h2" className={classes.text}>
            {body}
          </Typography>
        </div>

        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.nextButton}
          onClick={getAnother}
        >
          {anotherText}
        </Button>
      </Container>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.madeWithLove}>
            Made with love by Tyrel
          </Typography>
          <IconButton
            color="inherit"
            href="https://github.com/Tyresius92/dnd-site"
            onClick={() => analytics.logEvent('github_icon_click')}
          >
            <GitHubIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
