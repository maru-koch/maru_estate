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
        let data = res.data.results 
        return data

    }catch(err){
        console.log("Error:" ,err)
    }
}

export const listing_detail_api = async (id, token)=>{

    // return the listing with the given id

    const url = `http://localhost:8000/api/listings/${id}`
    
    try{
        const res = await axios.get(url, {Authorization: `Bearer ${token}`})
        return res

    }catch(err){
        console.log(err.message)

    }
}

export const contact_api = async(formData)=>{
    const url = "http://localhost:8000/api/contact/";
    try{
        const res = await axios.post(url, formData)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}

export const search_api = async (formData) => {
    const url = 'http://localhost:8000/api/listings/search'
    try{
        const res = axios.post(url, formData)
        return res.data
    }catch(err){
        console.log(err.message)
    }
    
}