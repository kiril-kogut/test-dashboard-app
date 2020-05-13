import compose from 'ramda/src/compose';

const validateEmail = (value) => (errors) => {
  if (!value) return { ...errors, email: 'Required' };

  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(value)) return errors;

  return { ...errors, email: 'Not valid' };
};

const validatePhoneNumber = (value) => (errors) => {
  if (!value) return { ...errors, phoneNumber: 'Required' };

  const reg = /^\+?[0-9]+$/;

  if (reg.test(value)) return errors;

  return { ...errors, phoneNumber: 'Not valid' };
};

export const validateForm = (values) => {
  const errors = compose(
    validateEmail(values.email),
    validatePhoneNumber(values.phoneNumber)
  )({});

  return errors;
};