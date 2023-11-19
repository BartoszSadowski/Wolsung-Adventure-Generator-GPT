export function isTrue(probability: number) {
  return Math.random() < probability;
}

export function isFalse(probability: number) {
  return Math.random() >= probability;
}
