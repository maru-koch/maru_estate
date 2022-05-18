import axios from 'axios';
 const config ={
        header:{'Content-Type': 'application/json'}
    }
const BASE_URL = "http://localhost:8000"

export const login = async (email, password) => {
    // send the login credential to the backend api
    // receive a response

    const url = BASE_URL + "/api/token/";
    const body = JSON.stringify({email, password})

    try{
        const res = await axios.post(url, body, config)
        const payload = res.data
        console.log(payload)
        return {status: "successful", message:"successfully logged in", payload: payload}

    }catch(err){
        return {status:'error', message: "login failed" }
    }
}

export const signup = async (name, email, password_1, password_2)=>{
  
    const url = BASE_URL + "/api/accounts/signup/"
    const body = JSON.stringify({name, email, password_1, password_2})
    try{
        const response = await axios.post(url, body, config)
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const listing = async ()=>{

    const url = BASE_URL + "api/listings/"
    try{
        const res = await axios.get(url, config)
        return res
    }catch(err){
        console.log(err)
    }
}