import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

const TextInput = ({ input, meta, classes, ...restProps }) => {
  const styles = useStyles();

  return <TextField {...input} classes={{ root: clsx(styles.input, classes.root) }} {...restProps} />;
};

TextInput.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func.isRequired }).isRequired,
  meta: PropTypes.shape({ error: PropTypes.string }).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

TextInput.defaultProps = {
  classes: {},
};

export default TextInput;
