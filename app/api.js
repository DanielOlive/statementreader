import axios from "axios";
import { USER_AUTH_PATH } from "./config";

export default {
  user: {
    login: credentials =>
      axios.post(USER_AUTH_PATH, { credentials }).then(res => {
        console.log("RES:", res);
        return res.data.user;
      })
  }
};
