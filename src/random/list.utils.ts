function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomElement<T>(list: Array<T>): T {
  const index = getRandomInt(list.length);
  return list[index];
}