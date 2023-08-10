export function getMonday(date) {
  const millisecondsToSubtract = ((date.getDay() + 6) % 7) * 24 * 60 * 60 * 1000;
  const newDate = new Date(date.getTime() - millisecondsToSubtract);

  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return month + '-' + day + '-' + year;
}

export function getPreviousWeek(date) {
  const [month, day, year] = date.split('-');  // Switched day and month
  const oldDate = new Date(year, month - 1, day);
  const newDate = new Date(oldDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const newYear = newDate.getFullYear();
  const newMonth = newDate.getMonth() + 1;
  const newDay = newDate.getDate();

  return newMonth + '-' + newDay + '-' + newYear;
}
