import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import isEmpty from 'ramda/src/isEmpty';
import { Field, reduxForm, formValueSelector, SubmissionError } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { validateForm } from './validation';
import TextField from '../../../../components/TextField';
import UploadButton from '../../../../components/UploadButton';
import DatePicker from '../../../../components/DatePicker';
import Select from '../../../../components/Select';
import { updateProfile } from '../../../../redux/reducers/profile';
import { ReactComponent as AvatarDefaultIcon } from '../../../../assets/svg/icon_avatar_default.svg';

const formName = 'profile';
const formSelector = (field) => (state) => formValueSelector(formName)(state, field);

const storeTypes = [
  { label: 'type1', value: 'type1' },
  { label: 'type2', value: 'type2' },
  { label: 'type3', value: 'type3' },
];

const Profile = ({ handleSubmit: reduxFormSubmit }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const avatar = useSelector(formSelector('avatar'));

  const handleSubmit = async (values) => {
    const errors = validateForm(values);

    if (!isEmpty(errors)) {
      throw new SubmissionError(errors);
    }

    dispatch(updateProfile(values));
  };

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
            <Field name="phoneNumber" label="Phone Number" component={TextField} type="phoneNumber" />
          </div>
          <div className={styles.fullSizeRow}>
            <Field name="fullAddress" label="Full Address" component={TextField} />
          </div>
          <div className={styles.fullSizeRow}>
            <Field
              name="storeName"
              component={TextField}
              label="Store Name"
              classes={{ root: styles.halfInput }} />
            <Field
              name="storeType"
              component={Select}
              items={storeTypes}
              label="Store Type"
              classes={{ formWrapper: styles.halfInput }} />
          </div>
          <div className={styles.fullSizeRow}>
            <Field
              name="openingTime"
              component={DatePicker}
              label="Opening Time"
              animateYearScrolling
              classes={{ root: styles.halfInput }} />
            <Field
              name="closingTime"
              component={DatePicker}
              label="Closing Time"
              animateYearScrolling
              classes={{ root: styles.halfInput }} />
          </div>
          <div className={styles.formBottom}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: clsx(styles.buttonRoot, styles.buttonSave) }}
              onClick={reduxFormSubmit(handleSubmit)}>
              Save Changes
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Profile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const enhance = reduxForm({
  form: formName,
  initialValues: {
    openingTime: null,
    closingTime: null,
  },
});

export default enhance(Profile);
