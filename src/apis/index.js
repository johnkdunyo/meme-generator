import axios from 'axios';


const memeApi =  axios.create({
    baseURL: 'https://api.imgflip.com/get_memes',

        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json'
            
        }

});


export default memeApi;