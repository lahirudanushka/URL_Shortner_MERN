import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="www.lahirudanushka.tk">
         www.lahirudanushka.tk
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          MERN URL SHORTNER
      </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Developed By Lahiru Danushka
      </Typography>
        <Copyright />
      </footer>
    );
};

export default Footer;