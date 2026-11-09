import styled, { css } from 'styled-components';

/**
 * Type - every piece of text on the site.
 *
 *   <Type as="h1" size="L" weight="bold">Heading</Type>
 *   <Type size="M">Body copy</Type>
 *   <Type as="span" size="S">Footer link</Type>
 *
 * Semantics and style are separate axes: `as` decides what the element IS in
 * the document, size/weight/leading decide what it looks like. A section
 * title that has to be an h1 on one page and an h2 on another is the same
 * <Type size="M" weight="bold"> either way.
 *
 * Size steps up at the L and XL breakpoints by the multiplier in
 * theme.text.scale, so the responsive behaviour lives in the token rather
 * than in a media query per component.
 */

const px = (value, multiplier) => `${parseFloat(value) * multiplier}px`;

const responsiveSize = (size) => css`
  font-size: ${(props) => px(props.theme.text.size[size], props.theme.text.scale[size].base)};

  @media (min-width: ${(props) => props.theme.breakpoints.L}) {
    font-size: ${(props) => px(props.theme.text.size[size], props.theme.text.scale[size].L)};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.XL}) {
    font-size: ${(props) => px(props.theme.text.size[size], props.theme.text.scale[size].XL)};
  }
`;

export const Type = styled.p`
  margin: 0;
  margin-bottom: ${(props) => (props.mb ? props.theme.layout.space.snug : 0)};
  font-family: ${(props) => props.theme.layout.fontStack};
  letter-spacing: ${(props) => props.theme.text.tracking};
  font-weight: ${(props) => props.theme.text.weight[props.weight || 'reg']};
  line-height: ${(props) => {
    const size = props.size || 'M';
    const name = props.leading || props.theme.text.defaultLeading[size];
    return props.theme.text.leading[name];
  }};
  color: ${(props) =>
    props.muted ? props.theme.colors.blk40 : props.color || props.theme.text.color};

  ${(props) => responsiveSize(props.size || 'M')};
`;

export default Type;
