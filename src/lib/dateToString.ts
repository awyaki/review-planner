export const dateToString = (date: Date) => {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDay();
  return `${y}/${m}/${d}`;
};
