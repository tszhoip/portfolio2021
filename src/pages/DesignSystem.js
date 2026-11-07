import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import usage from '../data/tokenUsage.json';
import { Page } from '../components/layout/Page';
import { Section } from '../components/layout/Section';
import { Lead, Body } from '../components/layout/Text';

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
  column-gap: ${(props) => props.theme.layout.gap};
  align-items: baseline;

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1.4fr repeat(${COLUMNS.length}, 1fr);
    font-size: 10px;
  }
`;

const Head = styled.div`
  font-family: ${(props) => props.theme.layout.fontStack};
  font-size: ${(props) => props.theme.text.title.fontSize};
  font-weight: ${(props) => props.theme.text.title.fontWeight};
  letter-spacing: ${(props) => props.theme.text.title.letterSpacing};
  padding-bottom: ${(props) => props.theme.layout.gap};
  border-bottom: 1px solid ${(props) => props.theme.colors.blk40};
  text-align: ${(props) => (props.$name ? 'left' : 'right')};
`;

const GroupLabel = styled.div`
  grid-column: 1 / -1;
  font-family: ${(props) => props.theme.layout.fontStack};
  font-size: ${(props) => props.theme.text.title.fontSize};
  font-weight: ${(props) => props.theme.text.title.fontWeight};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: ${(props) => props.theme.layout.sectionPadding[0]} 0
    ${(props) => props.theme.layout.gap};
`;

const Cell = styled.div`
  font-family: 'Courier New', monospace;
  font-size: ${(props) => props.theme.text.body.fontSize};
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
  padding: ${(props) => props.theme.layout.gap};
  margin-top: ${(props) => props.theme.layout.sectionPadding[0]};
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

  const { layout, text, colors, breakpoints, fontSizes, spaces } = base;

  return (
    <ThemeProvider theme={base}>
      <Page>
        <Section>
          <Lead>Design System</Lead>
          <Body muted>
            Values read from theme.js, counts from npm run tokens. Brackets are how many
            times a token is referenced in src/. A row of identical cells means that token
            does not respond to viewport.
          </Body>
        </Section>

        <Section>
          <Grid>
            <Head $name>
              Breakpoints
              <br />
              max width {layout.maxWidth}
            </Head>
            {COLUMNS.map((col) => (
              <Head key={col}>{col}</Head>
            ))}
            {/* ---------- type ---------- */}
            <GroupLabel>Type</GroupLabel>
            {fontSizes.map((size, i) => (
              <Row
                key={`f${i}`}
                name={`fontSizes[${i}]`}
                value={size}
                count={usage.fontSizes[i] ?? 0}
              />
            ))}
            {Object.entries(text).map(([name, t]) => (
              <Row key={name} name={`text.${name}`} value={t.fontSize} count={usage.text[name] ?? 0} />
            ))}

            {/* ---------- spacing ---------- */}
            <GroupLabel>Spacing</GroupLabel>
            <Row name="layout.gutter" value={layout.gutter} count={usage.layout.gutter} />
            {/* the small value applies below M, not below S, so the columns
                are listed rather than stepped through */}
            <Row
              name="layout.sectionPadding"
              value={[
                layout.sectionPadding[0],
                layout.sectionPadding[0],
                layout.sectionPadding[1],
                layout.sectionPadding[1],
                layout.sectionPadding[1],
              ]}
              count={usage.layout.sectionPadding}
            />
            <Row name="layout.gap" value={layout.gap} count={usage.layout.gap} />
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
            <Row name="layout.maxWidth" value={layout.maxWidth} count={usage.layout.maxWidth} />
            <Row name="layout.fullHeight" value={layout.fullHeight} count={usage.layout.fullHeight} />
            <Row name="layout.closedHeight" value={layout.closedHeight} count={usage.layout.closedHeight} />
            <Row name="layout.background" value={layout.background} count={usage.layout.background} />

            {/* ---------- colour ---------- */}
            <GroupLabel>Colour</GroupLabel>
            {Object.entries(colors).map(([name, hex]) => (
              <Row key={name} name={name} value={hex} count={usage.colors[name] ?? 0} swatch={hex} />
            ))}
          </Grid>

          <Note>
            <Body>
              spaces is exported under the key <code>spaces</code>, but styled-system reads{' '}
              <code>theme.space</code>. That is undefined, so p and m props fall back to
              styled-system&rsquo;s own scale — the arrow in each name is what actually
              renders. They agree at index 4 and nowhere else.
            </Body>
          </Note>

          <Note>
            <Body>
              Counts come from a static scan, so they see literal references only. Run{' '}
              <code>npm run tokens</code> after adding or removing usage; start and build
              run it automatically.
            </Body>
          </Note>
        </Section>
      </Page>
    </ThemeProvider>
  );
}

export default DesignSystem;
