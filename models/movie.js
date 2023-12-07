const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Должно быть заполнено'],
    validate: {
      validator(year) {
        return /^[12][0-9]{3}$/.test(year);
      },
      message: 'Некорректный год',
    },
  },
  description: {
    type: String,
    required: [true, 'Должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Должно быть заполнено'],
    validate: {
      validator(url) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(url);
      },
      message: 'Некорректная ссылка',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Должно быть заполнено'],
    validate: {
      validator(url) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(url);
      },
      message: 'Некорректная ссылка',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Должно быть заполнено'],
    validate: {
      validator(url) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(url);
      },
      message: 'Некорректная ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Должно быть заполнено'],
  },
  nameRU: {
    type: String,
    required: [true, 'Должно быть заполнено'],
  },
  nameEN: {
    type: String,
    required: [true, 'Должно быть заполнено'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
