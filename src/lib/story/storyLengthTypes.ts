export default {
  FLASH: {
    minWords: 500,
    maxWords: 1000,
    name: 'Flash',
    avChapters: 1
  },
  SHORT: {
    minWords: 1000,
    maxWords: 10000,
    name: 'Short',
    avChapters: 1
  },
  NOVELLA: {
    minWords: 10000,
    maxWords: 50000,
    name: 'Novella',
    avChapters: 6
  },
  NOVEL: {
    minWords: 50000,
    maxWords: 120000,
    name: 'Novel',
    avChapters: 12
  },
  EPIC: {
    minWords: 120000,
    maxWords: null,
    name: 'Epic',
    avChapters: 30
  },
  DEFAULT: {
    maxWords: 0,
    minWords: 0,
    name: 'undefined',
    avChapters: 0
  }
};
