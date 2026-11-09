import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import usage from '../data/tokenUsage.json';
import { Page } from '../components/layout/Page';
import { Section } from '../components/layout/Section';
import { Type } from '../components/layout/Type';

/**
 * Design System - every token as a row, every breakpoint as a column.
 *
 * Values come from `base` in theme.js and counts from tokenUsage.json, which
 * `npm run tokens` regenerates by scanning src/. Nothing here is retyped, so
 * the page cannot drift the way /library did.
 *
 * A row whose cells all read the same value is the point, not noise: it says
 * that token does not respond to viewport. Only gutter and sectionPadding do.
 */

// Four breakpoints make five ranges in mobile-first CSS, so "base" covers
// everything below S.
const COLUMNS = ['base', 'S', 'M', 'L', 'XL'];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr repeat(${COLUMNS.length}, 1fr);
  column-gap: 0;
  align-items: baseline;

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1.4fr repeat(${COLUMNS.length}, 1fr);
    font-size: 10px;
  }
`;

const Head = styled.div`
  font-family: ${(props) => props.theme.layout.fontStack};
  font-size: ${(props) => props.theme.text.size.M};
  font-weight: ${(props) => props.theme.text.weight.bold};
  letter-spacing: ${(props) => props.theme.text.tracking};
  padding-bottom: ${(props) => props.theme.layout.gap.tight};
  border-bottom: 1px solid ${(props) => props.theme.colors.blk40};
  text-align: ${(props) => (props.$name ? 'left' : 'right')};
`;

const GroupLabel = styled.div`
  grid-column: 1 / -1;
  font-family: ${(props) => props.theme.layout.fontStack};
  font-size: ${(props) => props.theme.text.size.M};
  font-weight: ${(props) => props.theme.text.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${(props) => props.theme.layout.space.loose} 0
    ${(props) => props.theme.layout.gap.tight};
`;

const Cell = styled.div`
  font-family: 'Courier New', monospace;
  font-size: ${(props) => props.theme.text.size.M};
  line-height: 2;
  text-align: right;
  color: ${(props) => props.theme.colors.blk40};
  border-bottom: 1px solid ${(props) => props.theme.colors.blk70};
`;

const NameCell = styled(Cell)`
  text-align: left;
  color: #000;
`;

// dimmed when zero, so an unused token reads as unused at a glance
const Count = styled.span`
  color: ${(props) => (props.$n ? props.theme.colors.blk50 : props.theme.colors.blk70)};
`;

const Swatch = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  vertical-align: baseline;
  background-color: ${(props) => props.$hex};
  border: 1px solid ${(props) => props.theme.colors.blk70};
`;

const Note = styled.div`
  padding: ${(props) => props.theme.layout.gap.tight};
  margin-top: ${(props) => props.theme.layout.space.loose};
  background-color: ${(props) => props.theme.colors.gre10};
  border-left: 2px solid ${(props) => props.theme.colors.blk40};
`;

const SITE_TITLE = 'MHZ Design Office';

/**
 * Expand a token to one value per column. A plain string does not respond to
 * viewport, so it fills every column. An array steps through its values and
 * holds the last one for the remaining columns.
 */
const perColumn = (value) => {
  if (!Array.isArray(value)) return COLUMNS.map(() => value);
  return COLUMNS.map((_, i) => value[Math.min(i, value.length - 1)]);
};

const Row = ({ name, value, count, swatch }) => (
  <>
    <NameCell>
      {swatch && <Swatch $hex={swatch} />}
      {name} <Count $n={count}>({count})</Count>
    </NameCell>
    {perColumn(value).map((v, i) => (
      <Cell key={COLUMNS[i]}>{v}</Cell>
    ))}
  </>
);

function DesignSystem() {
  useEffect(() => {
    document.title = `Design System — ${SITE_TITLE}`;
    return () => {
      document.title = SITE_TITLE;
    };
  }, []);

  const { maxWidth, layout, text, colors, breakpoints, spaces } = base;

  return (
    <ThemeProvider theme={base}>
      <Page>
        <Section>
          <Type as="h1" size="L">Design System</Type>
          <Type size="M" muted>
            Values read from theme.js, counts from npm run tokens. Brackets are how many
            times a token is referenced in src/. A row of identical cells means that token
            does not respond to viewport.
          </Type>
        </Section>

        <Section>
          <Grid>
            <Head $name>
              Breakpoints
              <br />
              max width {maxWidth}
            </Head>
            {COLUMNS.map((col) => (
              <Head key={col}>{col}</Head>
            ))}
            {/* ---------- type ---------- */}
            <GroupLabel>Type — size</GroupLabel>
            {Object.entries(text.size).map(([name, value]) => (
              <Row
                key={name}
                name={`size.${name}`}
                value={COLUMNS.map((col) => {
                  const step = text.scale[name][col] ?? text.scale[name].base;
                  return `${parseFloat(value) * step}px`;
                })}
                count={usage.text[`size.${name}`] ?? 0}
              />
            ))}

            <GroupLabel>Type — weight</GroupLabel>
            {Object.entries(text.weight).map(([name, value]) => (
              <Row
                key={name}
                name={`weight.${name}`}
                value={String(value)}
                count={usage.text[`weight.${name}`] ?? 0}
              />
            ))}

            <GroupLabel>Type — leading</GroupLabel>
            {Object.entries(text.leading).map(([name, value]) => (
              <Row
                key={name}
                name={`leading.${name}`}
                value={`${value * 100}%`}
                count={usage.text[`leading.${name}`] ?? 0}
              />
            ))}

            {/* ---------- spacing: room around things ---------- */}
            <GroupLabel>Spacing</GroupLabel>
            {Object.entries(layout.space).map(([name, value]) => (
              <Row
                key={name}
                name={`space.${name}`}
                value={value}
                count={usage.space[name] ?? 0}
              />
            ))}

            {/* ---------- gutter: room between things ---------- */}
            <GroupLabel>Gutter</GroupLabel>
            {Object.entries(layout.gap).map(([name, value]) => (
              <Row
                key={name}
                name={`gap.${name}`}
                value={value}
                count={usage.gap[name] ?? 0}
              />
            ))}

            {/* the old styled-system scale, kept only because p/m props on the
                unconverted pages still resolve against it. Not the same thing
                as space.* above, despite the name. */}
            <GroupLabel>Spacing — legacy styled-system props</GroupLabel>
            {spaces.map((size, i) => {
              const actual = [0, 4, 8, 16, 32, 64, 128][i];
              return (
                <Row
                  key={`s${i}`}
                  name={`spaces[${i}] → ${actual}px`}
                  value={size}
                  count={usage.spaces[i] ?? 0}
                />
              );
            })}

            {/* ---------- layout ---------- */}
            <GroupLabel>Layout</GroupLabel>
            <Row name="maxWidth" value={maxWidth} count={usage.maxWidth} />
            {/* the only two heights a section can be */}
            <Row name="layout.fullHeight" value={layout.fullHeight} count={usage.layout.fullHeight} />
            <Row name="layout.fitContent" value={layout.fitContent} count={usage.layout.fitContent} />

            {/* ---------- colour ---------- */}
            <GroupLabel>Colour</GroupLabel>
            {Object.entries(colors).map(([name, hex]) => (
              <Row key={name} name={name} value={hex} count={usage.colors[name] ?? 0} swatch={hex} />
            ))}
          </Grid>

          <Note>
            <Type size="M">
              spaces is exported under the key <code>spaces</code>, but styled-system reads{' '}
              <code>theme.space</code>. That is undefined, so p and m props fall back to
              styled-system&rsquo;s own scale — the arrow in each name is what actually
              renders. They agree at index 4 and nowhere else.
            </Type>
          </Note>

          <Note>
            <Type size="M">
              Counts come from a static scan, so they see literal references only. Run{' '}
              <code>npm run tokens</code> after adding or removing usage; start and build
              run it automatically.
            </Type>
          </Note>
        </Section>
      </Page>
    </ThemeProvider>
  );
}

export default DesignSystem;
