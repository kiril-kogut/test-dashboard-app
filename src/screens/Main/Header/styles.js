import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    height: '70px',
    minHeight: '70px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
    padding: '0 34px',
    justifyContent: 'space-between',
    backgroundColor: theme.header.background,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  storyName: {
    fontSize: '18px',
    fontFamily: theme.fontFamily,
    fontWeight: 500,
    color: theme.header.storyColor,
    marginLeft: '9px',
  },
  storyNameCircle: {
    width: '29px',
    height: '29px',
    borderRadius: '14.5px',
    color: 'white',
    backgroundColor: '#feb42c',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: 'Poppins',
  },
  iconPrimary: {
    color: '#bcbcbc',
  },
  divider: {
    height: '28px',
    margin: '0 21px 0 10px',
  },
  avatar: {
    marginLeft: '11px',
  },
}));

export default styles;
