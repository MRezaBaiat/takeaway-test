import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 16
  },
  shadows: ['none'],
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    success: {
      main: '#bac778'
    },
    raisedButton: {
      textColor: 'red', // this should work
      primaryTextColor: 'red', // or this if using `primary` style
      main: '#19857b'
    },
    background: {
      default: '#fff'
    }
  }
});

export default responsiveFontSizes(theme);
