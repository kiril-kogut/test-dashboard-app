import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    height: '100%',
    overflowY: 'auto',
    backgroundColor: '#32495e',
  },
  header: {
    height: '70px',
    backgroundColor: '#5fa01b',
    paddingLeft: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontSize: '22px',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontFamily: 'Poppins',
  },
  orderText: {
    color: 'white',
    fontSize: '22px',
    textTransform: 'uppercase',
    fontWeight: 300,
    fontFamily: 'Poppins',
  },
});

export default styles;
