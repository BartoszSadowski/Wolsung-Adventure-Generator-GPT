function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomIntInRange(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

export function getRandomElement<T>(list: Array<T>): T {
  const index = getRandomInt(list.length);
  return list[index];
}

export function getRandomSubList<T>(list: Array<T>, min?: number, max?: number): Array<T> {
  function reduceLength(sublist: Array<T>, length: number) {
    if (sublist.length <= length) return sublist;

    sublist.splice(getRandomInt(sublist.length), 1);

    return reduceLength(sublist, length);
  }

  const expectedLength = getRandomIntInRange(min || 0, max || list.length);
  return reduceLength(list, expectedLength);
}