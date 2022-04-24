import axios from 'axios';
const API_URL = 'http://localhost:8000';

const API = {
    getCurrentData: (minutes, callback) => {
        fetch(API_URL + '/get/resource/memory/' + minutes, {
            method: 'get',
            headers: { "Content-Type": "application/json" }
        })
            .then((resp) => resp.json())
            .then(function (data) {
                callback(data);
            })
            .catch(function (error) {
                console.log('ERROOOOOORRR!!!!', error);
            });
    },
    getPreviousData: (hours, callback) => {
        axios.post(API_URL + '/get/resource/memory',
            {
                hours: hours
            }).then((response) => {
                callback(response);
            }).catch((e) => {
                console.error(e);
            });
    },
}
export default API;