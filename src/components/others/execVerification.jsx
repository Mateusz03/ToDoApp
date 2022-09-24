const params = {
  username: /^[A-Za-z0-9]{7,}/,
  username1: //,
  password: /^[A-Za-z0-9]{7,}/,
};

const execVerify = (input) => {
  if (params.username.test(input.username1)) {
    console.log("Correct");
    return;
  }
  console.log(input);
};
export default execVerify;
