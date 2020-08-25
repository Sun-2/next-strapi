import styled, { css } from "styled-components";
import { Variant } from "../../utils/variant";

/*const variant = {
  make: (name: string, styles: ReturnType<typeof css>) => (props) =>
    props.variant === name ? styles : undefined,
};*/

const variant = (name: string) => (...args) => (props) => {
  // @ts-ignore
  return props.variant === name ? css(...args) : undefined;
};

const Div = styled.div<Variant<"primary" | "secondary">>`

  ${variant("primary")`
  background-color: red;
  color: black;
  color: `}
  
  
`;
export default function Second() {
  return <Div variant={"primary"}>Hello!</Div>;
}
