const execVerify = (input) => {
  const pattern = {
    username: /^[A-Za-z0-9]{6,12}$/,
    password: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{6,16}$/,
  };
  if (
    pattern.username.test(input.username) &&
    pattern.password.test(input.password)
  ) {
    return { exec: true };
  } else if (
    !pattern.username.test(input.username) &&
    !pattern.password.test(input.password)
  ) {
    return { exec: "both" };
  } else if (!pattern.password.test(input.password)) {
    return { exec: "password" };
  } else if (!pattern.username.test(input.username)) {
    return { exec: "username" };
  }
};
export default execVerify;
