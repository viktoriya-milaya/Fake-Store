const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.imgflip.com/get_memes", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));