import { clamp } from "./clamp";

export const colorInterpolate = (from: string, to: string, factor: number) => {
  factor = clamp(factor, 0, 1);

  let rFrom, gFrom, bFrom;
  if (from[0] === "#") {
    rFrom = parseInt(from[1] + from[2], 16);
    gFrom = parseInt(from[3] + from[4], 16);
    bFrom = parseInt(from[5] + from[6], 16);
  } else throw new Error(`Cannot parse color: ${from}`);

  let rTo, gTo, bTo;
  if (from[0] === "#") {
    rTo = parseInt(to[1] + to[2], 16);
    gTo = parseInt(to[3] + to[4], 16);
    bTo = parseInt(to[5] + to[6], 16);
  } else throw new Error(`Cannot parse color: ${to}`);

  return (
    "#" +
    Math.round(rFrom + (rTo - rFrom) * factor)
      .toString(16)
      .padStart(2, "0") +
    Math.round(gFrom + (gTo - gFrom) * factor)
      .toString(16)
      .padStart(2, "0") +
    Math.round(bFrom + (bTo - bFrom) * factor)
      .toString(16)
      .padStart(2, "0")
  );
};
