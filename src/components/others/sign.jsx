import execVerify from "../others/execVerification";
import axios from "axios";

export const signIn = (inputs) => {
  const execResult = execVerify(inputs);
  switch (execResult.exec) {
    case true:
      return;
    case "both":
      return {
        message: "both",
        messageValue: "Wrong username and password",
      };
    case "username":
      return { message: "username", messageValue: "Wrong username" };
    case "password":
      return {
        message: "password",
        messageValue: "Wrong password",
      };
    default:
      return;
  }
};
export const signUp = (inputs) => {
  inputs.password = inputs.firstPassword;
  const execResult = execVerify(inputs);
  switch (execResult.exec) {
    case true:
      return;
    case "both":
      return {
        message: "both",
        messageValue:
          "Username must have 6 letters. Password 1 big, 1 small,1 number and 6 letters",
      };
    case "username":
      return {
        message: "username",
        messageValue: "Username must have 6 letters",
      };
    case "password":
      return {
        message: "password",
        messageValue: "Password 1 big, 1 small,1 number and 6 letters",
      };
    default:
      return;
  }
};
