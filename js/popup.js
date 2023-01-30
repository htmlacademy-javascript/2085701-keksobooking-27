const TYPE_DICTIONARY = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const announcementCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const announcementList = document.querySelector('#map-canvas');

const renderDescription = (cardElement, description) => {
  const descriptionElement = cardElement.querySelector('.popup__description');
  if (description && description.length) {
    descriptionElement.textContent = description;
  } else {
    descriptionElement.remove();
  }
};

const renderFeatures = (cardElement, features) => {
  const featuresList = document.querySelector('.popup__features');
  const featuresItems = cardElement.querySelectorAll('.popup__feature');

  if (features && features.length) {
    const modifiers = features.map((feature) => `popup__feature--${feature}`);
    featuresItems.forEach((featuresItem) => {
      const modifier = featuresItem.classList[1];
      if (!modifiers.includes(modifier)) {
        featuresItem.remove();
      }
    });
  } else {
    featuresList.remove();
  }
};

const createPhoto = (photo, title) => {
  const photoElement = document.createElement('img');
  photoElement.classList.add('popup__photo');
  photoElement.width = '45';
  photoElement.height = '40';
  photoElement.src = photo;
  photoElement.alt = title;
  return photoElement;
};

const renderPhoto = (cardElement, photos, title) => {
  const photosList = cardElement.querySelector('.popup__photos');
  if (photos && photos.length) {
    photosList.innerHTML = '';
    photos.forEach((photo) => {
      const photoElement = createPhoto(photo, title);
      photosList.append(photoElement);
    });
  } else {
    photosList.remove();
  }
};

const createCardElement = ({ author, offer }) => {
  const announcementCard = announcementCardTemplate.cloneNode(true);
  announcementCard.querySelector('.popup__avatar').src = author.avatar;
  announcementCard.querySelector('.popup__title').textContent = offer.title;
  announcementCard.querySelector('.popup__text--address').textContent = offer.address;
  announcementCard.querySelector('[data-price]').textContent = offer.price;
  announcementCard.querySelector('.popup__type').textContent = TYPE_DICTIONARY[offer.type];
  announcementCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  announcementCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  renderDescription(announcementCard, offer.description);
  renderFeatures(announcementCard, offer.features);
  renderPhoto(announcementCard, offer.photos, offer.title);
  announcementList.append(announcementCard);
};

const createCards = (anoncements) => {
  anoncements.forEach((anoncement) => {
    createCardElement(anoncement);
  });
};

export {createCards};
