import axios from 'axios';
import { refs } from './refs.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//constants

let currentCtg;
let currentPage = 1;
let totalItems;

//toast
const toastError = mess =>
  iziToast.show({
    message: `Error: ${mess}`,
    position: 'topRight',
    color: 'red',
    close: false,
  });

//get categories
const ctgsGet = async () =>
  await axios('https://paw-hut.b.goit.study/api/categories');

//render categories
const ctgsRender = arr => {
  arr.unshift({ name: 'Всі' });
  return arr
    .map(
      el =>
        `<li class="pets-ctgs-item"><button class="pets-ctgs-btn" data-id="${el._id}" type="button">${el.name}</button></li>`
    )
    .join('');
};

//init categories

const ctgsInit = async () => {
  try {
    const ctgs = await ctgsGet();
    refs.ctgsList.innerHTML = ctgsRender(ctgs.data);
    const firstBtn = document.querySelector('.pets-ctgs-btn');
    firstBtn.classList.add('active');
    firstBtn.dataset.id = 'all';
  } catch (err) {
    toastError(err);
  }
};

//get pets
const getPets = async (page, limit, categoryId) => {
  const params = { page: page, limit: limit };
  if (categoryId) params.categoryId = categoryId;

  return await axios('https://paw-hut.b.goit.study/api/animals', {
    params: params,
  });
};

//render pets
const renderPets = arr =>
  arr
    .map(
      el => `<li class="pets-item">
    <div><img class="pets-img" src="${el.image}" alt="${el.species}">
    <p class="pets-species">${el.species}</p>
    <h3 class="pets-name">${el.name}</h3>
    <ul class="pets-own-ctgs-list">${el.categories
      .map(el => `<li class="pets-own-ctgs-item"><p>${el.name}</p></li>`)
      .join('')}</ul></div>
    <div><div class="pets-info">
    <p>${el.age}</p>
    <p>${el.gender}</p>
    </div>
    <p class="pets-behavior">${el.behavior}</p>
    <button class="pets-modal-btn" type="submit">Дізнатись більше</button></div>
</li>`
    )
    .join('');

//init pets

const petsInit = async (page, limit, categoryId) => {
  try {
    showloader();
    const pets = await getPets(page, limit, categoryId);
    hideLoader();
    refs.petsList.insertAdjacentHTML(
      'beforeend',
      renderPets(pets.data.animals)
    );

    totalItems = pets.data.totalItems;
  } catch (err) {
    toastError(err);
  }
};

//clear pets

const clearPets = () => (refs.petsList.innerHTML = '');

//change active category css

const changeActiveCtg = btn => {
  const allBtns = document.querySelectorAll('.pets-ctgs-btn');
  allBtns.forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
};

//category switch

const onClickCategory = e => {
  if (e.target.nodeName !== 'BUTTON') return;
  hideMoreBtn();
  changeActiveCtg(e.target);

  currentCtg = e.target.dataset.id === 'all' ? undefined : e.target.dataset.id;

  clearPets();
  currentPage = 1;
  petsInit(currentPage, 8, currentCtg);
  if (totalItems > 8) showMoreBtn();
};

refs.ctgsList.addEventListener('click', onClickCategory);

//load more btn

const onClickLoad = async () => {
  currentPage++;
  showloader();
  await petsInit(currentPage, 8, currentCtg);
  hideLoader();

  if (currentPage * 8 >= totalItems) hideMoreBtn();
};

refs.petsLoadBtn.addEventListener('click', onClickLoad);

//hide load more btn

const hideMoreBtn = () => {
  refs.petsLoadBtn.style.display = 'none';
};

//show load more btn

const showMoreBtn = () => {
  refs.petsLoadBtn.style.display = 'block';
};

//hide loader

const hideLoader = () => {
  refs.petsLoader.style.display = 'none';
};

//show loader

const showloader = () => {
  refs.petsLoader.style.display = 'block';
};

//load start page

ctgsInit();
await petsInit(currentPage, 8);
if (totalItems > 8) showMoreBtn();
