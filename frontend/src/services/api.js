import axios from 'axios';

 
export const login_api = async (formData) => {

    const url = "http://localhost:8000/api/token/";
    try{
        const data = await axios.post(url, formData)
        return data

    }catch(err){
        console.log(err)
    }
}

export const signup_api = async (formData)=>{

    const url = "http://localhost:8000/api/accounts/signup/"
    try{
        const response = await axios.post(url, formData);
        return response.data

    }catch(err){
        console.log(err)
    }
}

export const listing = async ()=>{

    const url = "http://localhost:8000/api/listings/"
    try{
        const res = await axios.get(url)
        const data = res.data.results 
        return data

    }catch(err){
        console.log(err)
    }
}