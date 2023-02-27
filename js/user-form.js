const TYPE_MIN = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const roomsToGuests = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const guestsToRooms = {
  '0': ['100'],
  '1': ['1', '2', '3'],
  '2': ['3', '2'],
  '3': ['3'],
};

const userForm = document.querySelector('.ad-form');
const typeField = userForm.querySelector('#type');
const addressField = userForm.querySelector('#address');
const priceField = userForm.querySelector('#price');
const timeInField = userForm.querySelector('#timein');
const timeOutField = userForm.querySelector('#timeout');
const roomsField = userForm.querySelector('#room_number');
const capacityField = userForm.querySelector('#capacity');

const pristine = new Pristine(userForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
}, true);

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

const onPriceChange = () => {
  pristine.validate(priceField);
  pristine.validate(typeField);
};

const onTypeChange = () => {
  pristine.validate(priceField);
  pristine.validate(typeField);
};

pristine.addValidator(priceField, validateMinPrice, getMinPriceErrorMessage);
pristine.addValidator(typeField, validateMinPrice, getMinPriceErrorMessage);

roomsField.addEventListener('change', onPriceChange);
capacityField.addEventListener('change', onTypeChange);

function changeTimeIn () {
  timeOutField.value = timeInField.value;
}

function changeTimeOut () {
  timeInField.value = timeOutField.value;
}

timeInField.addEventListener('change', changeTimeIn);
timeOutField.addEventListener('change', changeTimeOut);

function validateRoomsCount () {
  return roomsToGuests[roomsField.value].includes(capacityField.value);
}

function getCapacityCountErrorMessage () {
  return `Указанное количество комнат может вместить ${roomsToGuests[roomsField.value].join(' или ')} гостей`;
}

function getRoomsCountErrorMessage () {
  return `Для указанного числа гостей необходимо ${guestsToRooms[capacityField.value].join(' или ')} комнаты`;
}

const onCapacityChange = () => {
  pristine.validate(roomsField);
  pristine.validate(capacityField);
};

const onRoomsNumberChange = () => {
  pristine.validate(roomsField);
  pristine.validate(capacityField);
};

const onAddressFocus = () => {
  addressField.blur();
};

pristine.addValidator(roomsField, validateRoomsCount, getCapacityCountErrorMessage);
pristine.addValidator(capacityField, validateRoomsCount, getRoomsCountErrorMessage);

roomsField.addEventListener('change', onRoomsNumberChange);
capacityField.addEventListener('change', onCapacityChange);
addressField.addEventListener('change', onAddressFocus);

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValide = pristine.validate();
  if (isValide) {
    userForm.submit();
  }
});
