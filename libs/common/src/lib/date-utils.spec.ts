import { getDiffInWords, getDiffInWordsToNow } from './date-utils';

test('should return diff `3 days`', function() {
  let now = new Date();
  const next3Days = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
  now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let result = getDiffInWords(now, next3Days);
  expect(result).toContain('3 days', result);
  result = getDiffInWords(next3Days, now);
  expect(result).toContain('3 days', result);
});

test('should return diff `1 years 1 months` from now', function() {
  const now = new Date();
  const diff = new Date(now.getFullYear() - 1, now.getMonth() - 1, now.getDate());
  const result = getDiffInWordsToNow(diff);
  expect(result).toContain('1 years 1 months', result);
});
