export default function validateInfo(values) {
  let errors = {};

  if (!values.name?.trim()) {
    errors.name = "Your name is required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.message.trim()) {
    errors.message = "text required";
  }

  return errors;
}
