import Axios from 'axios'

export let commitLog = (userName,password) => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '127.0.0.1:8000',
            timeout: 1000
        });

        instance.post('/login',{
            data: {
                userName,
                password
            }
        }).then(val => {
            resolve(val);
        }).catch(err => {
            reject(err);
        })
    });
};
