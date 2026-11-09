import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Section - one horizontal band of a page.
 *
 * Two independent axes. `variant` is the height, and is one of the two the
 * theme names; `bleed` is whether the band runs edge to edge.
 *
 *   <Section>                     content height, gutter and cap
 *   <Section variant="full">      fills the viewport, gutter and cap
 *   <Section bleed>               content height, edge to edge
 *   <Section variant="full" bleed>fills the viewport, edge to edge
 *
 * They were one `variant` before, which made "edge to edge" a third height
 * and left no way to say an image wall is content height AND full width.
 *
 * The outer element is always full width so a background can span the whole
 * viewport. The inner one carries the maxWidth cap and the gutter, and bleed
 * is what skips it - along with the vertical rhythm, so a bleed section has
 * no padding on any side.
 */

const heights = {
  fit: css`
    min-height: ${(props) => props.theme.layout.fitContent};
  `,
  full: css`
    min-height: ${(props) => props.theme.layout.fullHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

const rhythm = css`
  padding-top: ${(props) => props.theme.layout.sectionPadding[1]};
  padding-bottom: ${(props) => props.theme.layout.sectionPadding[1]};

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    padding-top: ${(props) => props.theme.layout.sectionPadding[0]};
    padding-bottom: ${(props) => props.theme.layout.sectionPadding[0]};
  }
`;

const Outer = styled.section`
  width: 100%;
  box-sizing: border-box;
  ${(props) => heights[props.$variant] || heights.fit};
  ${(props) => !props.$bleed && rhythm};
`;

// Gutter steps with the viewport. theme.breakpoints is ["600px","900px",...]
const Inner = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding-left: ${(props) => props.theme.layout.gutter[0]};
  padding-right: ${(props) => props.theme.layout.gutter[0]};

  @media (min-width: ${(props) => props.theme.breakpoints[0]}) {
    padding-left: ${(props) => props.theme.layout.gutter[1]};
    padding-right: ${(props) => props.theme.layout.gutter[1]};
  }

  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding-left: ${(props) => props.theme.layout.gutter[2]};
    padding-right: ${(props) => props.theme.layout.gutter[2]};
  }
`;

export const Section = ({ variant = 'fit', bleed = false, children, ...rest }) => {
  // bleed has nothing to cap or pad, so it skips the inner wrapper entirely
  if (bleed) {
    return (
      <Outer $variant={variant} $bleed {...rest}>
        {children}
      </Outer>
    );
  }

  return (
    <Outer $variant={variant} {...rest}>
      <Inner>{children}</Inner>
    </Outer>
  );
};

export default Section;
