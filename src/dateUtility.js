export function getMonday(date) {
  const millisecondsToSubtract = ((date.getDay() + 6) % 7) * 24 * 60 * 60 * 1000;
  const newDate = new Date(date.getTime() - millisecondsToSubtract);

  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return month + '-' + day + '-' + year;
}
