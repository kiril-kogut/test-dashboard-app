import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    marginTop: '25px',
    marginLeft: '35px',
    marginRight: '35px',
  },
  profileTitle: {
    fontFamily: theme.fontFamily,
    fontWeight: '400',
    color: theme.profileTab.titleColor,
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
    fontFamily: theme.fontFamily,
    fontWeight: '600',
    textTransform: 'none',
    width: '128px',
    height: '44px',
    boxShadow: 'none',
  },
  buttonEdit: {
    backgroundColor: theme.profileTab.editButtonBackground,
    color: theme.profileTab.editButtonColor,
  },
  buttonUpload: {
    backgroundColor: theme.profileTab.uploadButtonBackground,
    color: theme.profileTab.uploadButtonColor,
  },
  buttonSave: {
    width: 'auto',
    backgroundColor: theme.profileTab.saveButtonBackground,
    color: theme.profileTab.saveButtonColor,
    padding: '0 20px',
  },
  fullSizeRow: {
    display: 'flex',
    width: '400px',
    maxWidth: '100%',
    marginBottom: '20px',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '190px!important',
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
}));

export default styles;
