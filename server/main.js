const { FieldValue } = require("firebase-admin/firestore");
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
    let respone;
    await usersRef
      .doc(params.id)
      .get()
      .then((val) => {
        usersRef.doc(params.id).update({
          ToDo: [
            ...val.data().ToDo,
            {
              id: val.data().ToDo.length,
              value: params.value,
              ended: params.ended,
            },
          ],
        });
        respone = {
          id: val.data().ToDo.length,
          value: params.value,
          ended: params.ended,
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return respone;
  }
};
module.exports.Delete = async (params) => {
  await usersRef.doc(params.userId).update({
    ToDo: FieldValue.arrayRemove({
      id: params.id,
      ended: params.ended,
      value: params.value,
    }),
  });
  return { delete: true };
};
module.exports.Done = async (params) => {
  await usersRef.doc(params.userId).update({
    ToDo: FieldValue.arrayUnion({
      id: params.id,
      value: params.value,
      ended: true,
    }),
  });
  await usersRef.doc(params.userId).update({
    ToDo: FieldValue.arrayRemove({
      id: params.id,
      value: params.value,
      ended: params.ended,
    }),
  });
  return { ended: true, id: params.id, value: params.value };
};
