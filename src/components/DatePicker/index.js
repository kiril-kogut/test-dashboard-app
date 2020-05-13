import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import useStyles from './styles';

const Picker = ({ input: { value, meta, ...restInput}, classes, format, ...restProps }) => {
  const styles = useStyles();

  return (
    <DatePicker
      className={clsx(styles.input, classes.root)}
      value={value ? moment(value, format) : null}
      format={format}
      {...restInput}
      {...restProps}
    />
  );
};

Picker.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  format: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

Picker.defaultProps = {
  classes: {},
  format: 'MM/DD/YYYY',
};

export default Picker;
