import axios from "axios";

export const fipeFetch = axios.create(
    {
        baseURL:'https://parallelum.com.br/fipe/api/v1/',
        headers: {
            'Content-Type': 'application/json'
        }        
    }
)