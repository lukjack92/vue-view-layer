import axios from 'axios';

//const urlAPI = 'http://localhost:3000/api/';
const urlAPI = 'http://192.168.1.107:3000/api/';

export default {
    login(credentials) {
        return axios
            .post(urlAPI + 'login/', credentials)
            .then(res => {
                return res.data
            })
    },

    signUp(credentials) {
        return axios
            .post(urlAPI + 'sign-up/', credentials)
            .then(res => {
                return res.data
            })
    },

    getSecretContent() {
        return axios.get(urlAPI + 'secret-route/')
            .then(res => {
                return res.data
            })
    }
};