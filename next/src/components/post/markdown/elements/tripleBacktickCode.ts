import { css } from "styled-components";

export default css`
  & > pre > code {
    display: block;
    margin: 0 1rem;
    padding: 0.8rem 1rem;
    border-color: #e4e4e4;
    border-style: solid;
    border-width: 0px 1px;
    overflow-x: auto;
    font-size: 1.4rem;

    @media (max-width: 500px) {
      font-size: 1.25rem;
    }
  }
`;
