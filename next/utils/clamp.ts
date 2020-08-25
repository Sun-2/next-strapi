export const clamp = (value: number, min: number, max: number) => {
  value = value > 1 ? 1 : value;
  value = value < 0 ? 1 : value;
  return value;
};
