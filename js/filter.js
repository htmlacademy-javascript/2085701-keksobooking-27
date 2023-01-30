const filterElement = document.querySelector('.map__filters');
const filters = filterElement.children;

const turnFilterOff = () => {
  filterElement.classList.add('map__filters--disabled');
  for (const filter of filters) {
    filter.disabled = true;
  }
};

const turnFilterOn = () => {
  filterElement.classList.remove('map__filters--disabled');
  for (const filter of filters) {
    filter.disabled = false;
  }
};

export { turnFilterOff, turnFilterOn };
