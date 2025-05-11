import axios from 'axios'
const baseUrl = 'api/login'

const login = async credentials =>{
    const response = await axios.post('baseurl',credentials)
    return response.status

}

export default {login}