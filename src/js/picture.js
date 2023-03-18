
const getDate = () => {
  const date = new Date();
  const today = date.toLocaleDateString('ru-RU');

  return today;
}


const createPictureOfDay = ({ url, title, copyright, explanation, hdurl }) => {

  const html = `
    <main>
    <div class="wrap">
    <section class="header">
      <h1 class="headding first-headding">Astronomy Picture of the Day</h1>
    </section>
    <section class="today__img">
      <img src="${url}" alt="${title}" id="url-img">
    </section>
    <section class="today today__content">
      <h2 class="headding second-headding" id="title">${title}</h2>
      <p class="today__data">
        <span class="brif" id="date">${getDate()}</span>
        <span class="brif" id="copyright">${copyright ?? ` `}</span>
      </p>
      <p id="explanation">${explanation}</p>
      <button class="button">
      <a href="${hdurl}" target="_blank">View HD Img</a>
      </button>
  </section>
</div>
</main>
        `;

  const body = document.querySelector('body');

  body.insertAdjacentHTML('afterbegin', html);

  console.log(html);

};

export default createPictureOfDay;

