function getPartitionIndex(partitionSize: number, currentIndex: number): number {
  return Math.floor(currentIndex / partitionSize);
}

export function dividePossiblyEvenly<T>(input: Array<T>, partitions: number): Array<Array<T>> {
  if (partitions < 1) {
    return [];
  }

  const partitionSize = Math.ceil(input.length / partitions);

  const result: Array<Array<T>> = Array.from({ length: partitions }, () => []);
  input.forEach((item, index) => {
    const partitionIndex = getPartitionIndex(partitionSize, index);
    result?.[partitionIndex]?.push(item);
  });

  return result;
}
