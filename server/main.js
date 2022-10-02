const {
  FieldValue,
  FieldPath,
  Firestore,
} = require("firebase-admin/firestore");
const { usersRef } = require("./firebase");

module.exports.Main = async (params) => {
  if (params.allValues) {
    let values;
    await usersRef
      .doc(params.id)
      .get()
      .then((val) => {
        values = val.data().ToDo;
      });
    return values;
  } else {
    await usersRef
      .doc(params.id)
      .get()
      .then((val) => {
        usersRef.doc(params.id).update({
          ToDo: [
            ...val.data().ToDo,
            {
              value: params.value,
              ended: params.ended,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    return { value: params.value, ended: params.ended };
  }
};
module.exports.Done = async (params) => {
  console.log(params);
};
module.exports.Delete = async (params) => {
  console.log(params);
  await usersRef.doc(params.userId).update({
    ToDo: FieldValue.arrayRemove({
      value: params.value,
      id: params.id,
    }),
  });
};
