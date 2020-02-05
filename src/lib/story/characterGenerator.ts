import * as faker from 'faker';

export default () => {
  return {
    name: `${faker.name.findName()} ${faker.name.lastName()}`,
    characterDescription: faker.lorem.sentences(3)
  };
};
