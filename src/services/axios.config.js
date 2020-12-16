import axios from 'axios'
import {TOKEN} from './service.url'

axios.defaults.headers.common = {
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'apllication/json'  
}

export default axios