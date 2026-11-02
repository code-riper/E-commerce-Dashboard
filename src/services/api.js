import axios from "axios";

const api = axios.create({
    baseURL:"https://e-commerce-dashboard-kk1a.onrender.com"
})

export default api;