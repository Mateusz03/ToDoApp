import execVerify from "../others/execVerification";
import axios from "axios";
import { getToken, setToken } from "./token";

export const SignIn = async (inputs) => {
  const execResult = execVerify(inputs);
  switch (execResult.exec) {
    case true:
      await axios
        .post(
          "http://localhost:3001/login",
          { body: { username: inputs.username, password: inputs.password } },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        )
        .then((res) => {
          setToken(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return getToken();
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
export const signUp = async(inputs) => {
  let result;
  inputs.password = inputs.firstPassword;
  const execResult = execVerify(inputs);
  switch (execResult.exec) {
    case true:
      await axios
      .post(
        "http://localhost:3001/register",
        { body: { username: inputs.username, password: inputs.password } },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
      )
      .then((res) => {
        result = res.data;

      })
      .catch((err) => {
        console.log(err);
      });
      return result;
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
