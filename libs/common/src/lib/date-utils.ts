import { addMonths, addYears, compareAsc, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

export function getDiffInWords(dateLeft: string | number | Date, dateRight: string | number | Date): string {
  const result = compareAsc(dateLeft, dateRight);
  let startDate = dateLeft;
  let endDate = dateRight;
  if (result === 1) {
    startDate = dateRight;
    endDate = dateLeft;
  }
  const retVal: string[] = [];
  const years = differenceInYears(endDate, startDate);
  if (years > 0) {
    retVal.push(`${years} years`);
    startDate = addYears(startDate, years);
  }

  const months = differenceInMonths(endDate, startDate);
  retVal.push(`${months} months`);
  if (months > 0) {
    startDate = addMonths(startDate, months);
  }

  const days = differenceInDays(endDate, startDate);
  if (days > 0) {
    retVal.push(`${days} days`);
  }

  return retVal.join(' ');
}

export function getDiffInWordsToNow(diff: string | number | Date): string {
  const now = new Date();
  return getDiffInWords(diff, now);
}
