import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Section - one horizontal band of a page.
 *
 *   <Section>                content height, standard vertical padding
 *   <Section variant="full"> fills the viewport
 *   <Section variant="bleed">edge to edge, no gutter, no cap
 *
 * The outer element is always full width so a background can span the whole
 * viewport. The inner one carries the maxWidth cap and the gutter, which is
 * what "bleed" opts out of.
 */

const variants = {
  fit: css`
    padding-top: ${(props) => props.theme.layout.sectionPadding[1]};
    padding-bottom: ${(props) => props.theme.layout.sectionPadding[1]};

    @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
      padding-top: ${(props) => props.theme.layout.sectionPadding[0]};
      padding-bottom: ${(props) => props.theme.layout.sectionPadding[0]};
    }
  `,
  full: css`
    min-height: ${(props) => props.theme.layout.fullHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  bleed: css`
    padding: 0;
  `,
};

const Outer = styled.section`
  width: 100%;
  box-sizing: border-box;
  ${(props) => variants[props.$variant] || variants.fit};
`;

// Gutter steps with the viewport. theme.breakpoints is ["600px","900px",...]
const Inner = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${(props) => props.theme.layout.maxWidth};
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

export const Section = ({ variant = 'fit', children, ...rest }) => {
  // bleed has nothing to cap or pad, so it skips the inner wrapper entirely
  if (variant === 'bleed') {
    return (
      <Outer $variant={variant} {...rest}>
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
