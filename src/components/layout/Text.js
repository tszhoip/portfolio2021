import styled, { css } from 'styled-components';

/**
 * Type primitives reading theme.text, so a size or weight changes in one
 * place instead of in each page's own styled-components.
 */

// `muted` switches to the secondary text colour; both come from the theme,
// so neither a hex nor a size appears in a page file.
const token = (name) => css`
  margin: 0;
  font-family: ${(props) => props.theme.layout.fontStack};
  font-size: ${(props) => props.theme.text[name].fontSize};
  font-weight: ${(props) => props.theme.text[name].fontWeight};
  line-height: ${(props) => props.theme.text[name].lineHeight};
  letter-spacing: ${(props) => props.theme.text[name].letterSpacing};
  color: ${(props) =>
    props.muted ? props.theme.colors.blk40 : props.theme.text[name].color};
`;

export const Lead = styled.h1`
  ${token('lead')};
`;

export const Title = styled.h2`
  ${token('title')};
`;

export const Body = styled.p`
  ${token('body')};
`;
