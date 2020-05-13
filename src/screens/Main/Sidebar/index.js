import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import useStyles from './styles';
import { ReactComponent as BarsIcon } from '../../../assets/svg/icon_dashboard.svg';
import { ReactComponent as ProductIcon } from '../../../assets/svg/icon_products.svg';
import { ReactComponent as OrderIcon } from '../../../assets/svg/icon_order.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/svg/icon_calendar.svg';

const Sidebar = () => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.cartText}>CART</span>
        <span className={styles.orderText}>&ORDER</span>
      </div>
      <List component="nav" classes={{ root: styles.listRoot }}>
        <ListItem icon={<BarsIcon />} title="Dashboard" onClick={() => history.push('/dashboard')} />
        <ListItem icon={<ProductIcon />} title="Inventory" onClick={() => history.push('/inventory')} />
        <ListItem icon={<OrderIcon />} title="Open Order" onClick={() => history.push('/order')} />
        <ListItem icon={<CalendarIcon />} title="Order History" onClick={() => history.push('/history')} />
      </List>
    </div>
  );
};

export default Sidebar;
