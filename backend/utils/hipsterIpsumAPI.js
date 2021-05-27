import axios from 'axios';

const fetchIpsum = (sentencesLength)=>{

    return new Promise((resolve, reject)=>{
        
        axios.get("https://hipsum.co/api/?type=hipster-centric&sentences=" + sentencesLength)
        .then((response)=>{
            const sentences = response.data[0].split(".").filter(e=>e);
            resolve(sentences);
        })
        .catch((error)=>{
            console.log(error);
            reject(null);
        });

    });

}

export {fetchIpsum};