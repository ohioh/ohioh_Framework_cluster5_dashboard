export const numberFormat = (num) => {
  return num.toLocaleString('en-GB', {
    maximumFractionDigits: 3,
  });
};
