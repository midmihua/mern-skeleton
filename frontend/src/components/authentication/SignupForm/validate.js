const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,24}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password1) {
    errors.password1 = 'Password is required';
  }

  if (!values.password2) {
    errors.password2 = 'Password confirmation is required';
  }

  if (values.password1 !== values.password2) {
    errors.password2 = "Passwords doesn't match";
  }

  if (values.password1 && values.password1.length < 8) {
    errors.password2 = "Password must contain at least 8 characters";
  }

  return errors;
};

export default validate;
