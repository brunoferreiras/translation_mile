import { formatDateUTC } from '../../src/utils/date';

describe('Date Utils', () => {
  it('should to convert `2011-05-12T20:09:39Z` to `12/05/2011 20:09:39`', () => {
    const expectedDate = '12/05/2011 20:09:39';
    expect(formatDateUTC('2011-05-12T20:09:39Z')).toEqual(expectedDate);
  });
});
