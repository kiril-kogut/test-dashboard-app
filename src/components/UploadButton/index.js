import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import useStyles from './styles';

const UploadButton = ({ classes, children, input }) => {
  const styles = useStyles();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (readerEvent) => {
      const src = readerEvent.target.result;

      input.onChange(src);
    });

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        accept="image/*"
        className={styles.uploadInput}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          classes={classes}>
          {children}
        </Button>
      </label>
    </div>
  );
};

UploadButton.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func.isRequired }).isRequired,
  classes: PropTypes.shape({}),
};

UploadButton.defaultProps = {
  classes: {},
};

export default UploadButton;
