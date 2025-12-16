import axios from 'axios';
import { refs } from './refs.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

//user device width check

const checkWidth = () => {
  if (window.innerWidth < 768) return 'mobile';
  else if (window.innerWidth < 1440) return 'tablet';
  else return 'desktop';
};

const setLimit = () =>
  userDevice === 'mobile' || userDevice === 'tablet' ? 8 : 9;

//constants

let currentCtg;
let currentPage = 1;
let totalItems;

let userDevice = checkWidth();

let limit = setLimit();
let isMobile = userDevice === 'mobile';

//toast
const toastError = mess =>
  iziToast.show({
    message: `Error: ${mess}`,
    position: 'topRight',
    color: 'red',
    close: false,
  });

//pagination

const svgTemplate = str => {
  if (str === 'prev') {
    return `<svg width="24" height="24">
      <use href="../img/sprite.svg#icon-arrow-back"></use>
     </svg>`;
  } else if (str === 'next') {
    return `<svg width="24" height="24">
        <use href="../img/sprite.svg#icon-arrow-forward"></use>
       </svg>`;
  }
};

const pagination = new Pagination('pagination', {
  totalItems,
  itemsPerPage: limit,
  visiblePages: 4,
  centerAlign: true,
  template: {
    moveButton: ({ type }) => {
      if (type === 'prev')
        return `<a href="#" class="tui-page-btn tui-prev">${svgTemplate(
          'prev'
        )}</a>`;
      else if (type === 'next')
        return `<a href="#" class="tui-page-btn tui-next">${svgTemplate(
          'next'
        )}</a>`;
      else if (type === 'first')
        return `<a href="#" class="tui-page-btn tui-first"></a>`;
      else if (type === 'last')
        return `<a href="#" class="tui-page-btn tui-last"></a>`;
    },
    disabledMoveButton: ({ type }) => {
      if (type === 'prev')
        return `<a href="#" class="tui-page-btn tui-prev tui-is-disabled">${svgTemplate(
          'prev'
        )}</a>`;
      else if (type === 'next')
        return `<a href="#" class="tui-page-btn tui-next tui-is-disabled">${svgTemplate(
          'next'
        )}</a>`;
      else if (type === 'first')
        return `<a href="#" class="tui-page-btn tui-first"></a>`;
      else if (type === 'last')
        return `<a href="#" class="tui-page-btn tui-last"></a>`;
    },
  },
});

//pagination functions

const onClickPage = async ({ page }) => {
  currentPage = page;
  clearPets();
  await initPets(currentPage, currentCtg);
};

pagination.on('afterMove', onClickPage);

//update pagination

//get categories
const getCtgs = async () =>
  await axios('https://paw-hut.b.goit.study/api/categories');

//render categories
const renderCtgs = arr => {
  arr.unshift({ name: 'Всі' });

  return arr
    .map(
      el =>
        `<li class="pets-ctgs-item"><button class="pets-ctgs-btn" data-id="${el._id}" type="button">${el.name}</button></li>`
    )
    .join('');
};

//init categories

const initCtgs = async () => {
  try {
    const ctgs = await getCtgs();
    refs.ctgsList.innerHTML = renderCtgs(ctgs.data);
    const firstBtn = document.querySelector('.pets-ctgs-btn');
    firstBtn.classList.add('active');
    firstBtn.dataset.id = 'all';
  } catch (err) {
    toastError(err);
  }
};

//get pets
const getPets = async (page, categoryId) => {
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

const initPets = async (page, categoryId) => {
  try {
    showloader();
    const pets = await getPets(page, categoryId);
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

const onClickCategory = async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  if (isMobile) hideMoreBtn();
  else if (!isMobile) hidePagination();

  changeActiveCtg(e.target);
  currentCtg = e.target.dataset.id === 'all' ? undefined : e.target.dataset.id;

  clearPets();
  currentPage = 1;
  await initPets(currentPage, currentCtg);

  if (isMobile && totalItems > limit) showMoreBtn();
  else if (!isMobile) showPagination();
};

refs.ctgsList.addEventListener('click', onClickCategory);

//load more btn

const onClickLoad = async () => {
  currentPage++;
  await initPets(currentPage, currentCtg);

  if (currentPage * limit >= totalItems) hideMoreBtn();
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

const showPagination = () => {
  pagination.reset(totalItems);
  refs.petsPagination.style.display = 'flex';
};

const hidePagination = () => {
  refs.petsPagination.style.display = 'none';
};

//re render after resize page

const onResizePage = () => {
  const device = checkWidth();
  if (device === userDevice) return;

  clearPets();
  hideMoreBtn();
  hidePagination();

  userDevice = device;
  limit = setLimit();
  currentPage = 1;
  initPets(currentPage, currentCtg);

  if (device === 'mobile' && currentPage * limit < totalItems) showMoreBtn();
  else if (device !== 'mobile') showPagination();
};

window.addEventListener('resize', onResizePage);

//load start page

await initCtgs();
await initPets(currentPage);

if (userDevice === 'mobile' && totalItems > limit) showMoreBtn();
else showPagination();
