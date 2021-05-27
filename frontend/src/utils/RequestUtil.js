import {API_KEY, API_URL} from './../config/api';

export default async function(path, method, params){

    const response = await fetch(`${API_URL}${path}`,{
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        },
        body: params ? JSON.stringify(params) : null,
    });

    if(response.status === 200){
        
        const data = await response.json();
        return data;

    }else{
        alert("Ocurrio un error")
        return false;
    }

}