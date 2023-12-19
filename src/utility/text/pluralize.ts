export function pluralize(singular: string, plural: string, otherPlural: string) {
  return (count: number) => {
    if (count < 0) {
      throw new Error('Negativ count not supported');
    }

    if (count === 1) {
      return singular;
    }

    const isTeen = Math.floor(count % 100 / 10) === 1;
    const isTwosThreesOrFoursNumber = [2, 3, 4].includes(count % 10);

    if (isTeen || !isTwosThreesOrFoursNumber) {
      return otherPlural;
    }

    return plural;
  };
}