import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './styles';


const Item = ({ icon, title, onClick }) => {
  const styles = useStyles();

  return (
    <ListItem button classes={{ gutters: styles.listItemGlutters, root: styles.root }} onClick={onClick}>
      <ListItemIcon classes={{ root: styles.iconRoot }}>
        <div className={styles.svgRoot}>
          {icon}
        </div>
      </ListItemIcon>
      <ListItemText primary={title} primaryTypographyProps={{ classes: { root: styles.text }}} />
    </ListItem>
  );
};

Item.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  title: '',
  onClick: () => {},
};

export default Item;
