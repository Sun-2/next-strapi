import styled from "@emotion/styled";

/*
* ASd
* */
export const MyComponent = (props) => {
  return <Div {...props}>MyComponent</Div>;
};

const Div = styled.div<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor || "red"};
  height: 300px;
`;
