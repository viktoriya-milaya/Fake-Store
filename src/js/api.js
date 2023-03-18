
import { removeLoader } from './loader';
import createPictureOfDay from './picture';
import createError404 from './error404';


async function getApiData() {
  try{
    const getData = await fetch("https://go-apod.herokuapp.com/apod");
    const getDataJson = await getData.json();
    console.log(getDataJson);
     await removeLoader();
     createPictureOfDay(getDataJson);
  }
  catch {
    createError404();
  }

  
};

export default getApiData;
