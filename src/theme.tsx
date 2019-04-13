import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink';
import brown from '@material-ui/core/colors/brown';

const light = 50;
const main = 500;
const dark = 800;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: pink[light],
      main: pink[main],
      dark: pink[dark],
      contrastText: '#fff',
    },
    secondary: {
      light: brown[light],
      main: brown[main],
      dark: brown[dark],
      contrastText: '#000',
    },
  },
});

export default theme;