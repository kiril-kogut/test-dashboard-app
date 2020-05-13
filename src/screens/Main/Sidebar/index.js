import React from 'react';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import useStyles from './styles';
import { ReactComponent as BarsIcon } from '../../../assets/svg/icon_dashboard.svg';
import { ReactComponent as ProductIcon } from '../../../assets/svg/icon_products.svg';
import { ReactComponent as OrderIcon } from '../../../assets/svg/icon_order.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/svg/icon_calendar.svg';

const Sidebar = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.cartText}>CART</span>
        <span className={styles.orderText}>&ORDER</span>
      </div>
      <List component="nav">
        <ListItem icon={<BarsIcon />} title="Inbox" />
        <ListItem icon={<ProductIcon />} title="Inventory" />
        <ListItem icon={<OrderIcon />} title="Open Order" />
        <ListItem icon={<CalendarIcon />} title="Order History" />
      </List>
    </div>
  );
};

export default Sidebar;
