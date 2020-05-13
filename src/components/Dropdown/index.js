import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useStyles from './styles';

const Dropdown = ({ title, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const styles = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        endIcon={<KeyboardArrowDownIcon color="primary" classes={{ colorPrimary: styles.icon, root: styles.root }}  />}
        classes={{ text: styles.text }}
        onClick={handleClick}>
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {children}
      </Menu>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string
  ]),
};

Dropdown.defaultProps = {
  title: '',
  children: '',
};

export default Dropdown;