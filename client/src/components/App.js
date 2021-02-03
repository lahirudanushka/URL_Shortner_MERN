import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import BackspaceIcon from '@material-ui/icons/Backspace';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import useStyles from './styles';
import validUrl from 'valid-url';
import Footer from './Footer';
import { Grow } from '@material-ui/core';
import axios from 'axios';



export default function App() {
  const classes = useStyles();
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(false);
  const [copy, setCopy] = useState(null);


  const clearSubmit = () => {
    setUrl(null);
    setError(null);
    setResult(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validUrl.isUri(url)) {
      setError("NOT A VALID URL");
    } else {
      setResult(true);
      const API = axios.create({ baseURL: "http://localhost:5015" });
      API.post('/', { url: url }).then(function (response) { setCopy(response.data.newurl); })
        .catch(function (error) {
          console.log(error);
        });
    }

  };

  const copyCodeToClipboard = (e) => {
    e.preventDefault();
    const el = document.createElement('textarea');
    el.value = copy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.cover}>
        <AppBar position="relative">
          <Toolbar>

            <Typography variant="h6" color="inherit" noWrap>
              MERN URL Shortner
          </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                MERN URL Shortner
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                This URL shortner is a demo project developed with React NodeJS Express and MongoDB.
            </Typography>
              <div className={classes.heroButtons} >
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                      <Paper className={classes.root}>



                        <InputBase
                          name="url"
                          onChange={(e) => setUrl(e.target.value)}
                          className={classes.input}
                          placeholder="Paste URL here"
                          required
                          value={url ? url : ''}

                        />


                        <IconButton className={classes.iconButton} aria-label="Generate" type="submit">
                          <GetAppIcon />
                        </IconButton>
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton onClick={clearSubmit} color="primary" className={classes.iconButton} aria-label="directions">
                          <BackspaceIcon />
                        </IconButton>




                      </Paper>
                    </form>
                  </Grid>



                </Grid>

                <Typography component="h6" variant="h6" align="center" color="secondary" gutterBottom>
                  <small> {error ? error : null}</small>
                </Typography>


                <Grid container spacing={5} justify="center">
                  <Grid item>
                    <Grow in={result}>
                      <form noValidate onSubmit={copyCodeToClipboard}>
                        <Paper className={classes.root2}>

                          <InputBase
                            className={classes.input}
                            name='newurl'

                            value={copy ? copy : ''}
                            inputProps={{ 'aria-label': 'search google maps' }}
                          />

                          <Tooltip title="Copy to clipboard" aria-label="Copy to clipboard">
                            <IconButton type='submit' color="primary" className={classes.iconButton} aria-label="directions">
                              <FileCopyIcon />
                            </IconButton>
                          </Tooltip>
                        </Paper>
                      </form>

                    </Grow>

                  </Grid>


                </Grid>


              </div>
            </Container>
          </div>

        </main>
        {/* Footer */}
        <Footer />
      </div>
      {/* End footer */}
    </React.Fragment>
  );
}