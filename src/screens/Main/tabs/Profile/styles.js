import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    marginTop: '25px',
    marginLeft: '35px',
    marginRight: '35px',
  },
  profileTitle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#233143',
    fontSize: '26px',
    lineHeight: '40px',
  },
  card: {
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
    backgroundColor: 'white',
    paddingTop: '55px',
    paddingBottom: '46px',
    paddingLeft: '20px',
    paddingRight: '20px',
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    margin: '0 11px',
    width: '251px',
    height: '251px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '41px',
  },
  buttonRoot: {
    borderRadius: '30px',
    fontSize: '13px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    textTransform: 'none',
    width: '128px',
    height: '44px',
    boxShadow: 'none',
  },
  buttonEdit: {
    backgroundColor: '#edf1f4',
    color: '#808f9a',
  },
  buttonUpload: {
    backgroundColor: '#5fa01b',
    color: 'white',
  },
  buttonSave: {
    width: 'auto',
    backgroundColor: '#5fa01b',
    color: 'white',
    padding: '0 20px',
  },
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
  fullSizeRow: {
    display: 'flex',
    width: '400px',
    maxWidth: '100%',
    marginBottom: '20px',
  },
  inputRightMargin: {
    marginRight: '10px',
  },
  inputLeftMargin: {
    marginLeft: '10px',
  },
  uploadInput: {
    display: 'none',
  },
  formBottom: {
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  avatarImage: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
});

export default styles;
