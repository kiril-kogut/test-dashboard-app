import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';


const TextInput = ({ input, meta, classes, type, ...restProps }) => {
  const styles = useStyles();

  const handleOnChange = (e) => {
    const validationKeyMap = {
      phoneNumber: () => /^\+?[0-9]*$/.test(e.target.value),
    };

    const isValid = e.target.value && validationKeyMap[type] ? validationKeyMap[type]() : true;

    if (!isValid) return;

    input.onChange(e);
  };

  return (
    <TextField
      error={meta.error}
      helperText={meta.error}
      {...input}
      onChange={handleOnChange}
      classes={{ root: clsx(styles.input, classes.root) }}
      {...restProps} />
  );
};

TextInput.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func.isRequired }).isRequired,
  meta: PropTypes.shape({ error: PropTypes.string }).isRequired,
  type: PropTypes.oneOf(['phoneNumber']),
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

TextInput.defaultProps = {
  classes: {},
  type: '',
};

export default TextInput;
