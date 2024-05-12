import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
});


export default instance;

// axios iss liya create kia ha ky bar bar api ko call na krni pry...