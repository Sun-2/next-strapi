import {css} from "styled-components";

export default css`
  & blockquote {
    position: relative;
    margin: 0 1rem;
    padding-left: 1.5rem;
    border-left-style: solid;
    border-right-style: dashed;

    border-color: #dadada;
    display: block;

    border-width: 0 1px 0 1rem;
  }
`;
