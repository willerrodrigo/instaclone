import axios from 'axios';

const api = axios.create({
    //localhost para o simulador android genymotion = 10.0.3.2:3333
    //localhost para android via USB = <ip_wifi>:3333
    //localhost para IOS = localhost:3333
    baseURL: 'http://192.168.10.20:3333',
});

export default api;
