import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

export type Variant<T extends string = "default"> = { variant: T };

export const variant = (variants: {
  [variantName: string]:
    | ReturnType<typeof css>
    | Parameters<typeof styled.div>[1];
}) => {
  return (props) => {
    return variants["default"] || "";
  };
};

const a = variant({
  a: css``,
  b: ({ theme }) => theme.palette.background,
});
