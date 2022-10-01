const { usersRef } = require("./firebase");

module.exports.Register = async (params) => {
  const query = await usersRef.where("username", "==", params.username).get();
  if (query.empty) {
    usersRef.add({
      username: params.username,
      password: params.password,
      ToDo: [],
    });
    return { register: true };
  }
  return { register: false };
};
