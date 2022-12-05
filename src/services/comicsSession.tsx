
export async function getComics(limit : number) {

    const publicKey = 'f235b695ed7733d97a3c902d7c91758b';
    const secretKey = 'd49c1a3c97af8a51d14289b0db7f6e78b4407e68';
    const timeStamp = Math.floor(Date.now() / 1000)
    const hash = `${timeStamp}${secretKey}${publicKey}`;
    const md5 = require('md5');
    const md5Hash = md5(hash)
 
    const options = {
        method: 'GET',
        headers: {Accept: '*/* ', 'Content-Type': 'application/json'},
      };
      
      return fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&ts=${timeStamp}&apikey=${publicKey}&hash=${md5Hash}`, options)
        .then(response => response.json())
        .then(response => { 
          return response
        })
        .catch(err => console.error(err));
    }

