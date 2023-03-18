import loaderImg from '../assets/loader.svg';

export const createLoader = () => {
    const loader = document.createElement('img');
    loader.setAttribute('src', loaderImg);
    loader.classList.add(`show-elem`, `center`);

    document.body.append(loader);
};

export const removeLoader = () => new Promise((resolve) => {
    const loader = document.querySelector('.center');
    loader.classList.remove('show-elem');
    loader.classList.add('hide-elem');
    loader.addEventListener('animationend', () => {
        loader.remove();
        resolve();
    });
});