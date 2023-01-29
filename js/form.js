const form = document.querySelector('.ad-form');
const elementsForm = form.querySelectorAll('.ad-form__element');
const elementHeadreForm = form.querySelector('.ad-form-header');
const filtersForm = document.querySelector('.map__filters');
const filters = filtersForm.querySelectorAll('.map__filter');
const disactiveForm = () => {
  form.classList.add('ad-form--disabled');
  elementsForm.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  elementHeadreForm.setAttribute('disabled', 'disabled');
  filters.forEach((filter) => {
    filter.setAttribute('disabled', 'disabled');
  });
  filtersForm.classList.add('map__filters--disabled');
};

disactiveForm();

const activeForm = () => {
  form.classList.remove('ad-form--disabled');
  elementsForm.forEach((element) => {
    element.removeAttribute('disabled');
  });
  elementHeadreForm.removeAttribute('disabled');
  filters.forEach((filter) => {
    filter.removeAttribute('disabled');
  });
  filtersForm.classList.remove('map__filters--disabled');
};

activeForm();
