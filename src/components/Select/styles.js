import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  formWrapper: {
    width: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'flex-end',

    '&:before': {
      borderColor: theme.input.borderColor,
    },
  },

  label: {
    fontFamily: theme.fontFamily,
    fontSize: '15px',
    color: theme.input.color,
  },
}));

export default styles;
