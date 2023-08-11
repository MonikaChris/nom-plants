export function getMonday(date) {
  const millisecondsToSubtract = ((date.getDay() + 6) % 7) * 24 * 60 * 60 * 1000;
  const newDate = new Date(date.getTime() - millisecondsToSubtract);

  return dateToString(newDate);
}

export function getPreviousWeek(date) {
  const [month, day, year] = date.split('-');
  const oldDate = new Date(year, month - 1, day);
  const newDate = new Date(oldDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  return dateToString(newDate);
}

function dateToString(date) {
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}