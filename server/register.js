const { usersRef } = require("./firebase");

module.exports.Register = async (params) => {
  const query = await usersRef.where("username", "==", params.username).get();
  if (query.empty) {
    usersRef.add({
      username: params.username,
      password: params.password,
      ToDo: [{ id: 1, value: "Default text you can delete him", ended: false }],
    });
    return { register: true };
  }
  return { register: false };
};
