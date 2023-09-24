import axios from "axios";
import { delay } from "../utils/customWait";
import { getUserDataFromLocalStoreProm } from "../BrowserData/localStore";

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface UserResponse {
  name: string;
  img: string;
  email: string;
  token: string;
  role: string;
  id: string;
}
export interface LoginResponse {
  msg: string;
  userInfo: UserResponse;
}

export function login({ identifier, password }: LoginCredentials) {
  const delayInMilliseconds = 3000;
  return delay(delayInMilliseconds)
    .then(() => {
      return axios.post<LoginResponse>("http://localhost:3000/login", {
        identifier: identifier,
        password: password,
      });
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error("Credentials are wrong");
      }
    })
    .catch((err) => {
      throw err?.response?.data?.error;
    });
}

interface UserResponseFromLocalStore {
  userName: string;
  img: string;
  email: string;
  token: string;
  role: string;
  id: string;
}

interface UserDataFromLocalStore {
  value: UserResponseFromLocalStore;
}

export async function fetchUserData() {
  const userData = await getUserDataFromLocalStoreProm<UserDataFromLocalStore>(
    "user"
  );
  return userData?.value ?? null;
}
