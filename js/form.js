import { turnFilterOff, turnFilterOn, filtersReset } from './filter.js';

const adFormElement = document.querySelector('.ad-form');
const fieldsets = adFormElement.querySelectorAll('fieldset');

const turnAdFormOff = () => {
  adFormElement.classList.add('ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  turnFilterOff();
};

const turnAdFormOn = () => {
  adFormElement.classList.remove('ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  turnFilterOn();
};

const adFormReset = () => {
  filtersReset();
  adFormElement.reset();
};

export { turnAdFormOn, turnAdFormOff, adFormReset };
