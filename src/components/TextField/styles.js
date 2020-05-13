import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  input: {
    display: 'flex',
    width: '100%',
    color: 'green',
    fontFamily: 'Poppins',
    fontSize: '15px',

    '& input, .MuiFormLabel-root': {
      color: '#43425d',
      fontFamily: 'Poppins',
      fontSize: '15px',
    },
    '& .MuiInput-underline:before': {
      borderColor: '#e9e9f0'
    }

  },
});

export default styles;
