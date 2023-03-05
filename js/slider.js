const sliderElement = document.querySelector('.ad-form__slider');
const userForm = document.querySelector('.ad-form');
const priceField = userForm.querySelector('#price');

const SLIDER_CONFIG = {
  MAX: 100000,
  MIN: 0,
  START: priceField.placeholder,
  STEP: 1,
};

noUiSlider.create(sliderElement, {
  range: {
    min: SLIDER_CONFIG.MIN,
    max: SLIDER_CONFIG.MAX,
  },
  start: SLIDER_CONFIG.START,
  step: SLIDER_CONFIG.STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});
