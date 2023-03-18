
import error404Img from '../assets/error404.jpg';

const createError404 = () => {
    const img404 = document.createElement('img');
    img404.setAttribute('src', error404Img);
    img404.classList.add(`show-elem`, 'err404');


    document.body.append(img404);
};

export default createError404;