import styled, {css} from "styled-components";
import { codeHighlightingCss } from "./codeHighlightingCss";
import media from "../../../../utils/mediaQuery";
import tripleBacktickCode from "./elements/tripleBacktickCode";
import singleBacktickCode from "./elements/singleBacktickCode";
import image from "./elements/image";
import headers from "./elements/headers";
import quote from "./elements/quote";


export const Markdown = styled.div`
  margin: 0 auto;

  letter-spacing: 0.02rem;
  font-size: 1.5rem;
  line-height: 185%;

  ${media.medium} {
    font-size: 1.9rem;
    line-height: 170%;
  }

  /* Markdown elements */
  ${tripleBacktickCode}
  ${singleBacktickCode}
  ${image}
  ${headers}
  ${quote}
  
  /* Syntax highlighting in three-backtick clauses */
  ${codeHighlightingCss};
`;
