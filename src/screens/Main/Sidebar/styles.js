import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    height: '100%',
    overflowY: 'auto',
    backgroundColor: theme.sideBar.background,
  },
  listRoot: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  header: {
    height: '70px',
    backgroundColor: theme.sideBar.headerColor,
    paddingLeft: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontSize: '22px',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontFamily: theme.fontFamily,
  },
  orderText: {
    color: theme.sideBar.headerTitleColor,
    fontSize: '22px',
    textTransform: 'uppercase',
    fontWeight: 300,
    fontFamily: theme.fontFamily,
  },
}));

export default styles;
