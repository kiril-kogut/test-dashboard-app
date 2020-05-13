import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
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
