import axios from "axios";
import {
  USER_AUTH_PATH,
  TRANSACTIONLIST_PATH,
  UPDATE_TRANSACTIONLIST_PATH,
  FILE_UPLOAD_PATH
} from "./config";

export default {
  user: {
    login: credentials =>
      axios.post(USER_AUTH_PATH, { credentials }).then(res => res.data.user)
  },
  transactions: {
    getTransactions: () =>
      axios.get(TRANSACTIONLIST_PATH).then(res => res.data.data),
    markAsPaid: ids =>
      axios.post(UPDATE_TRANSACTIONLIST_PATH, ids).then(res => res.data),
    uploadCSVFile: formData =>
      axios.post(FILE_UPLOAD_PATH, formData).then(res => res.data)
  }
};
