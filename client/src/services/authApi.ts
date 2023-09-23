import axios from "axios";
import { delay } from "../utils/customWait";
import { getUserDataFromLocalStoreProm } from "../BrowserData/localStore";

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export function login({ identifier, password }: LoginCredentials) {
  const delayInMilliseconds = 3000;
  return delay(delayInMilliseconds)
    .then(() => {
      return axios.post("http://localhost:3000/login", {
        identifier: identifier,
        password: password,
      });
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        return res.data;
      } else {
        throw new Error("Credentials are wrong");
      }
    })
    .catch((err) => {
      throw err?.response?.data?.error;
    });
}

export async function fetchUserData() {
  const userData = await getUserDataFromLocalStoreProm("user");
  return userData;
}
