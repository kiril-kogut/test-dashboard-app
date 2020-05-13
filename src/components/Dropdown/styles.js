import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      height: '32px',
    },
  },
  text: {
    fontFamily: theme.fontFamily,
    fontSize: '13px',
    fontWeight: '400',
    color: theme.dropdown.color,
    textTransform: 'none',
  },
  icon: {
    color: theme.dropdown.iconColor,
  },
}));

export default styles;
