export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntInRange(min: number, max: number) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}