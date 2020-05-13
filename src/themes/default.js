import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  fontFamily: 'Poppins',
  sideBar: {
    background: '#32495e',
    headerColor: '#5fa01b',
    headerTitleColor: 'white',
    itemColor: '#768c9a',
  },
  colors: {
    sideBar: 'black',
    fontFamily: 'Poppins',
  },
  header: {
    background: 'white',
    storyColor: '#555555',
  },
  dropdown: {
    color: '#585858',
    iconColor: '#bcbcbc',
  },
  input: {
    color: '#43425d',
    borderColor: '#e9e9f0',
  },
  profileTab: {
    titleColor: '#233143',
    editButtonBackground: '#edf1f4',
    editButtonColor: '#808f9a',
    uploadButtonBackground: '#5fa01b',
    uploadButtonColor: 'white',
    saveButtonBackground: '#5fa01b',
    saveButtonColor: 'white',
  },
  main: {
    background: '#edf1f4',
  },
});

export default theme;
