import { USER_URL, REDEEM_URL, COINS_URL } from "./service.url";
import axios from "./axios.config";

const userService = {
  getUser() {
    return axios.get(USER_URL);
  },
  redeemProduct(data) {
    return axios.post(REDEEM_URL, data);
  },
  addCoins() {
    return axios.post(COINS_URL, { amount: 1000 });
  },
};

export default userService;