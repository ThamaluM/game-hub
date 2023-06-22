import axios from "axios";



export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {key: 'bf34874927284558a5be5aa3f045ad35'}
})