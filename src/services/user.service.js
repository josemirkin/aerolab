import {USER_URL, REDEEM_URL, COINS_URL} from './service.url'
import axios from './axios.config'


export default {
    getUser() {
        return axios.get(USER_URL)
    },
    redeemProduct(data) {
        return axios.post(REDEEM_URL, data)
    },
    addCoins() {
        return axios.post(COINS_URL, {amount: 1000})
    }
}