import React  from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import TextField from '../../../../components/TextField';
import UploadButton from '../../../../components/UploadButton';
import DatePicker from '../../../../components/DatePicker';
import { ReactComponent as AvatarDefaultIcon } from '../../../../assets/svg/icon_avatar_default.svg';

const formName = 'profile';
const formSelector = (field) => (state) => formValueSelector(formName)(state, field);

const Profile = () => {
  const styles = useStyles();

  const avatar = useSelector(formSelector('avatar'));

  const renderAvatar = () => {
    if (!avatar) return <AvatarDefaultIcon />;

    return <div className={styles.avatarImage} style={{ backgroundImage: `url("${avatar}")` }} />;
  };

  return (
    <div className={styles.container}>
      <span className={styles.profileTitle}>My Profile</span>
      <Grid container className={styles.card}>
        <Grid item xl={6}>
          <div className={styles.avatarContainer}>
            {renderAvatar()}
          </div>
          <div className={styles.buttons}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: clsx(styles.buttonRoot, styles.buttonEdit) }}>
              Edit
            </Button>
            <Field name="avatar" component={UploadButton} classes={{ root: clsx(styles.buttonRoot, styles.buttonUpload) }}>
              Upload
            </Field>
          </div>
        </Grid>
        <Grid item xl={6}>
          <div className={styles.fullSizeRow}>
            <Field name="fullName" component={TextField} label="Full Name" />
          </div>
          <div className={styles.fullSizeRow}>
            <Field name="email" component={TextField} label="Email" />
          </div>
          <div className={styles.fullSizeRow}>
            <Field name="phoneNumber" label="Phone Number" component={TextField} />
          </div>
          <div className={styles.fullSizeRow}>
            <Field name="fullAddress" label="Full Address" component={TextField} />
          </div>
          <div className={styles.fullSizeRow}>
            <Field
              name="storeName"
              component={TextField}
              label="Store Name"
              classes={{ root: styles.inputRightMargin }} />
            <Field
              name="storeType"
              component={TextField}
              label="Store Type"
              classes={{ root: styles.inputLeftMargin }} />
          </div>
          <div className={styles.fullSizeRow}>
            <Field
              name="openingTime"
              component={DatePicker}
              label="Opening Time"
              animateYearScrolling
              classes={{ root: styles.inputRightMargin }} />
            <Field
              name="closingTime"
              component={DatePicker}
              label="Closing Time"
              animateYearScrolling
              classes={{ root: styles.inputLeftMargin }} />
          </div>
          <div className={styles.formBottom}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: clsx(styles.buttonRoot, styles.buttonSave) }}>
              Save Changes
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const enhance = reduxForm({
  form: formName,
  initialValues: {
    openingTime: null,
    closingTime: null,
  },
});

export default enhance(Profile);
