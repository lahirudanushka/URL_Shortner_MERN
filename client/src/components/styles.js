import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      minHeight: `70vh`
    },
    heroButtons: {
      marginTop: theme.spacing(8),
  
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(5),
  
  
    },
    cover: {
      height: `100vh`,
      backgroundColor: `white`,
  
  
    },
    root: {
      padding: '5px 5px',
      display: 'flex',
      alignItems: 'center',
      width: 500,
    },
    root2: {
      marginTop : theme.spacing(4),
      padding: '5px 5px',
      display: 'flex',
      alignItems: 'center',
      width: 500,
    },
    input: {
      marginLeft: theme.spacing(4),
      flex: 1,
    },
    iconButton: {
      padding: 20,
    },
    divider: {
      height: 50,
      margin: 4,
    },
  }));

