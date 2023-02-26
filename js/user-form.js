const TYPE_MIN = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const COUNT = {
  '1': '1',
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': '0',
};

const userForm = document.querySelector('.ad-form');
const titleField = userForm.querySelector('#title');
const typeField = userForm.querySelector('#type');
const priceField = userForm.querySelector('#price');
const timeInField = userForm.querySelector('#timein');
const timeOutField = userForm.querySelector('#timeout');
const roomsField = userForm.querySelector('#room_number');
const capacityField = userForm.querySelector('#capacity');

const pristine = new Pristine(userForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__element-error-text',
});

function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(titleField, validateTitle, 'От 30 до 100 символов');

function onUnitChange() {
  priceField.placeholder = TYPE_MIN[typeField.value];
}

function getMinPriceErrorMessage() {
  return `Минимальная цена ${TYPE_MIN[typeField.value]}`;
}

function validateMinPrice() {
  onUnitChange();
  return TYPE_MIN[typeField.value] <= (priceField.value);
}

pristine.addValidator(priceField, validateMinPrice, getMinPriceErrorMessage);
pristine.addValidator(typeField, validateMinPrice, getMinPriceErrorMessage);

function changeTimeIn () {
  timeOutField.value = timeInField.value;
}

function changeTimeOut () {
  timeInField.value = timeOutField.value;
}

timeInField.addEventListener('change', changeTimeIn);
timeOutField.addEventListener('change', changeTimeOut);

function validateRoomsCount () {
  return COUNT[roomsField.value].includes(capacityField.value);
}

function getRoomsCountErrorMessage () {
  return `${roomsField.value} не может быть использована для ${capacityField.value} гостей`;
}

pristine.addValidator(roomsField, validateRoomsCount, getRoomsCountErrorMessage);
pristine.addValidator(capacityField, validateRoomsCount, getRoomsCountErrorMessage);

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValide = pristine.validate();
  if (isValide) {
    userForm.submit();
  }
});
