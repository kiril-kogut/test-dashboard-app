import React  from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './styles';

const SelectComponent = ({ items, input, classes, label, ...restProps }) => {
  const styles = useStyles();

  const renderItems = () => {
    return items.map((item) => (
      <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
    ));
  };

  return (
    <FormControl className={clsx(styles.formWrapper, classes.formWrapper)}>
      <InputLabel classes={{ root: styles.label }}>{label}</InputLabel>

      <Select
        {...restProps}
        classes={{ root: styles.label }}
        className={styles.container}
        {...input}>
        {renderItems()}
      </Select>
    </FormControl>
  );
};

SelectComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  input: PropTypes.shape({ onChange: PropTypes.func.isRequired }).isRequired,
  classes: PropTypes.shape({
    formWrapper: PropTypes.string,
  }),
};

SelectComponent.defaultProps = {
  classes: {},
};

export default SelectComponent;
