import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles';
import Badge from '../../../components/Badge';
import Dropdown from '../../../components/Dropdown';

const Header = () => {
  const styles = useStyles();
  const history = useHistory();

  const avatar = useSelector((state) => state.profile.avatar);
  const fullName = useSelector((state) => state.profile.fullName);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.storyNameCircle}>SN</div>
        <div className={styles.storyName}>Store Name</div>
      </div>
      <div className={styles.contentContainer}>
        <IconButton color="primary" classes={{ colorPrimary: styles.iconPrimary }}>
          <Badge state="green">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Divider orientation="vertical" classes={{ root: styles.divider }} />
        <Dropdown title={fullName}>
          <MenuItem onClick={() => history.push('/profile')}>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Dropdown>
        <Avatar
          alt={fullName}
          src={avatar}
          className={styles.avatar} />
      </div>
    </div>
  );
};

export default Header;
