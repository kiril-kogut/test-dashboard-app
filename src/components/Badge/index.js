import React from 'react';
import PropTypes from 'prop-types';
import Badge from "@material-ui/core/Badge";
import useStyles from './styles';

const BadgeComponent = ({ state, content, children }) => {
  const styles = useStyles();

  const stateMap = {
    green: () => (
      <Badge
        color="primary"
        overlap="circle"
        variant="dot"
        badgeContent={content}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ colorPrimary: styles.badgePrimary }}>
        {children}
      </Badge>
    ),
  };

  return stateMap[state] ? stateMap[state]() : stateMap.green();
};

BadgeComponent.propTypes = {
  state: PropTypes.string,
  content: PropTypes.string,
};

BadgeComponent.defaultProps = {
  state: 'green',
  content: '',
};

export default BadgeComponent;
