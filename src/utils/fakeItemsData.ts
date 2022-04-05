import { ItemData } from "../interfaces/itemData";

/**
 * Fake items data for testing - default
 */
const fakeItems: ItemData[] = [
  {
    count: 1,
    id: 1,
    imageUrl: 'any-image-url-1',
    name: 'any-name-1',
    price: 1
  },
  {
    count: 2,
    id: 2,
    imageUrl: 'any-image-url-2',
    name: 'any-name-2',
    price: 2
  },
  {
    count: 3,
    id: 3,
    imageUrl: 'any-image-url-3',
    name: 'any-name-3',
    price: 3
  },
  {
    count: 4,
    id: 4,
    imageUrl: 'any-image-url-4',
    name: 'any-name-4-lol',
    price: 4
  },
  {
    count: 5,
    id: 5,
    imageUrl: 'any-image-url-5',
    name: 'any-name-5-lol',
    price: 5
  }
];

/**
 * Fake items data for testing - item with id 3 is removed
 */
export const fakeItemsReduced: ItemData[] = [
  {
    count: 1,
    id: 1,
    imageUrl: 'any-image-url-1',
    name: 'any-name-1',
    price: 1
  },
  {
    count: 2,
    id: 2,
    imageUrl: 'any-image-url-2',
    name: 'any-name-2',
    price: 2
  },
  {
    count: 4,
    id: 4,
    imageUrl: 'any-image-url-4',
    name: 'any-name-4-lol',
    price: 4
  },
  {
    count: 5,
    id: 5,
    imageUrl: 'any-image-url-5',
    name: 'any-name-5-lol',
    price: 5
  }
];

/**
 * Fake items data for testing - count of item with id 2 is decreased
 */
 export const fakeItemsDecreased: ItemData[] = [
  {
    count: 1,
    id: 1,
    imageUrl: 'any-image-url-1',
    name: 'any-name-1',
    price: 1
  },
  {
    count: 1,
    id: 2,
    imageUrl: 'any-image-url-2',
    name: 'any-name-2',
    price: 2
  },
  {
    count: 3,
    id: 3,
    imageUrl: 'any-image-url-3',
    name: 'any-name-3',
    price: 3
  },
  {
    count: 4,
    id: 4,
    imageUrl: 'any-image-url-4',
    name: 'any-name-4-lol',
    price: 4
  },
  {
    count: 5,
    id: 5,
    imageUrl: 'any-image-url-5',
    name: 'any-name-5-lol',
    price: 5
  }
];

/**
 * Fake items data for testing - count of item with id 1 is increased
 */
 export const fakeItemsIncreased: ItemData[] = [
  {
    count: 2,
    id: 1,
    imageUrl: 'any-image-url-1',
    name: 'any-name-1',
    price: 1
  },
  {
    count: 1,
    id: 2,
    imageUrl: 'any-image-url-2',
    name: 'any-name-2',
    price: 2
  },
  {
    count: 3,
    id: 3,
    imageUrl: 'any-image-url-3',
    name: 'any-name-3',
    price: 3
  },
  {
    count: 4,
    id: 4,
    imageUrl: 'any-image-url-4',
    name: 'any-name-4-lol',
    price: 4
  },
  {
    count: 5,
    id: 5,
    imageUrl: 'any-image-url-5',
    name: 'any-name-5-lol',
    price: 5
  }
];

export const fakeItemIncreased: ItemData = {
  count: 2,
  id: 1,
  imageUrl: 'any-image-url-1',
  name: 'any-name-1',
  price: 1
}

export default fakeItems;