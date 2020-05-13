import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  left: {
    width: '260px',
    height: '100%',
  },
  right: {
    overflowY: 'auto',
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: theme.main.background,
    flex: 1,
  },
}));

export default styles;
