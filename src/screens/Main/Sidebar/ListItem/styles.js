import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    paddingTop: '25px',
    paddingBottom: '25px',
  },
  iconRoot: {
    minWidth: 'auto',
  },
  svgRoot: {
    marginRight: '25px',
  },
  listItemGlutters: {
    paddingRight: '25px',
    paddingLeft: '25px',
  },
  text: {
    color: theme.sideBar.itemColor,
    fontSize: '14px',
    fontFamily: theme.fontFamily,
  },
}));

export default styles;
