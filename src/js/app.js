'use strict'

const createMemesImg = (memes) => memes.forEach((element) => {
  const div = document.createElement('div');
  div.classList.add('meme');
  div.innerHTML = `
  <img src = ${element.url} alt=${element.name} class="img">                 
  <p class="meme__name"><b>Название:</b> ${element.name}</p>
  <p class="meme__id"><b>ID:</b> ${element.id}</p>
  `;
  document.body.append(div);
});



const getMemesWithFetch = () => {
  fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(result => createMemesImg(result.data.memes.slice(0, 9)))
    
    .catch(error => console.log('ERROR', error.message))
    ;
}


async function getMemesWithAsyncFunk() {
  try {
    const getData = await fetch("https://ai.imgflip.com/get_memes");
    const getDataJson = await getData.json();

    createMemesImg(getDataJson.data.memes.slice(0, 9));

  } catch (error) {
    console.log('ERROR', error.message);
  }
}


getMemesWithFetch();
getMemesWithAsyncFunk();