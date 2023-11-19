import { dividePossiblyEvenly } from '../../../src/utility/array/partition';

describe('dividePossiblyEvenly', () => {
  it('should divide the array evenly when it is divisible', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const partitions = 3;
    const result = dividePossiblyEvenly(input, partitions);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  it('should divide the array unevenly when it is not divisible', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const partitions = 4;
    const result = dividePossiblyEvenly(input, partitions);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });

  it('should return an array of empty arrays with partitions length when input is empty', () => {
    const input: number[] = [];
    const partitions = 2;
    const result = dividePossiblyEvenly(input, partitions);
    expect(result).toEqual([[], []]);
  });

  it('should return an empty array when partitions count is zero', () => {
    const input = [1, 2, 3];
    const partitions = 0;
    const result = dividePossiblyEvenly(input, partitions);
    expect(result).toEqual([]);
  });

  it('should return an empty array when partitions count is negative', () => {
    const input = [1, 2, 3];
    const partitions = -2;
    const result = dividePossiblyEvenly(input, partitions);
    expect(result).toEqual([]);
  });
});