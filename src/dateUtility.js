export function getMonday(date) {
  const millisecondsToSubtract = ((date.getDay() + 6) % 7) * 24 * 60 * 60 * 1000;
  const newDate = new Date(date.getTime() - millisecondsToSubtract);

  return dateToString(newDate);
}

export function getPreviousWeek(date) {
  return adjustDateByDays(date, -7);
}

export function getNextWeek(date) {
  return adjustDateByDays(date, 7);
}

function adjustDateByDays(date, days) {
  const [month, day, year] = date.split('-');
  const oldDate = new Date(year, month - 1, day);
  const newDate = new Date(oldDate.getTime() + days * 24 * 60 * 60 * 1000);
  
  return dateToString(newDate);
}

function dateToString(date) {
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

export function getCurrentWeek() {
  return getMonday(new Date());
} 