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
 * Size steps up at the breakpoints named in theme.text.steps, so the
 * responsive behaviour lives in the token rather than in a media query per
 * component. A size with no steps emits no media query at all.
 *
 * The steps are not jumps. A size named at a breakpoint ramps into it across
 * the range below, then holds:
 *
 *   size.L   24px ....../ 48px ------- 48px ...../ 64px -------
 *            |      600 |          1400 |     1800
 *            flat   ramp   flat     ramp     flat
 *
 * so a window being dragged wider grows the heading continuously instead of
 * snapping. The named widths are still exactly the values in the token - the
 * interpolation only fills the space between them.
 */

// narrowest first, so later rules win where two apply
const BREAKPOINTS = ['S', 'M', 'L', 'XL'];

const n = (value) => parseFloat(value);

/**
 * A step ramps from the breakpoint *before* the one it is named at, which is
 * what makes `L: { M: '48px' }` mean "24 at S, 48 by M" rather than a jump at
 * M. Without a preceding breakpoint there is nothing to ramp across, so the
 * value simply takes effect.
 */
const sizeRules = (theme, size) => {
  const rules = [];
  let from = theme.text.size[size];

  BREAKPOINTS.forEach((name, i) => {
    const to = theme.text.steps[size][name];
    if (!to) return;

    const end = n(theme.breakpoints[name]);
    const start = i > 0 ? n(theme.breakpoints[BREAKPOINTS[i - 1]]) : null;

    if (start !== null && start < end) {
      const delta = n(to) - n(from);
      rules.push(
        `@media (min-width: ${start}px) {` +
          `font-size: calc(${n(from)}px + ${delta} * (100vw - ${start}px) / ${end - start});` +
          `}`
      );
    }

    rules.push(`@media (min-width: ${end}px) { font-size: ${to}; }`);
    from = to;
  });

  return rules.join('\n');
};

const responsiveSize = (size) => css`
  font-size: ${(props) => props.theme.text.size[size]};
  ${(props) => sizeRules(props.theme, size)};
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
