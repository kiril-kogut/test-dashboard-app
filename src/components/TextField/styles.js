import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  input: {
    width: '100%',

    '& .MuiInputBase-root': {
      height: '32px',
      width: '100%',
    },

    '& input, .MuiFormLabel-root': {
      color: theme.input.color,
      fontFamily: theme.fontFamily,
      fontSize: '15px',
    },
    '& .MuiInput-underline:before': {
      borderColor: theme.input.borderColor,
    },
  },
}));

export default styles;
