import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Page } from '../components/layout/Page';
import { Section } from '../components/layout/Section';
import { Lead, Title, Body } from '../components/layout/Text';

/**
 * Design System - a live reference for every token and layout component.
 *
 * Everything here is derived from `base` in theme.js rather than retyped, so
 * the page cannot drift from the real values. Add a colour to the theme and
 * it shows up here on its own.
 *
 * This is deliberately separate from /library, which hardcodes a palette that
 * does not exist in the theme.
 */

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.layout.sectionPadding[0]};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: ${(props) => props.theme.layout.gap};
  padding: ${(props) => props.theme.layout.gap} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.blk70};

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
  }
`;

const Mono = styled.code`
  font-family: 'Courier New', monospace;
  font-size: ${(props) => props.theme.text.body.fontSize};
  color: ${(props) => props.theme.colors.blk40};
`;

const Swatches = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${(props) => props.theme.layout.gap};
`;

const Chip = styled.div`
  height: 72px;
  border-radius: 2px;
  background-color: ${(props) => props.$hex};
  border: 1px solid ${(props) => props.theme.colors.blk70};
`;

const Bar = styled.div`
  height: 16px;
  background-color: ${(props) => props.theme.colors.blk40};
  width: ${(props) => props.$size};
`;

// Outlined so the variant's own box is visible rather than just its contents
const Demo = styled.div`
  outline: 1px dashed ${(props) => props.theme.colors.blk60};
  outline-offset: -1px;
`;

const Note = styled.div`
  padding: ${(props) => props.theme.layout.gap};
  background-color: ${(props) => props.theme.colors.gre10};
  border-left: 2px solid ${(props) => props.theme.colors.blk40};
`;

// theme scales carry named aliases alongside their numeric indices
// (breakpoints.S === breakpoints[0]). Find the name for a given value so the
// page prints the alias rather than a position.
const aliasOf = (scale, value) =>
  Object.keys(scale).find((key) => !/^\d+$/.test(key) && scale[key] === value);

const SITE_TITLE = 'MHZ Design Office';

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
            Every value below is read from theme.js at render time. Change a token there
            and this page follows.
          </Body>
        </Section>

        {/* ---------- layout ---------- */}
        <Section>
          <Stack>
            <Title>Layout</Title>
            <div>
              <Row>
                <Mono>maxWidth</Mono>
                <Mono>{layout.maxWidth}</Mono>
              </Row>
              <Row>
                <Mono>gutter</Mono>
                <Mono>{layout.gutter.join('  /  ')}&nbsp;&nbsp;(sm / md / lg)</Mono>
              </Row>
              <Row>
                <Mono>sectionPadding</Mono>
                <Mono>{layout.sectionPadding.join('  /  ')}&nbsp;&nbsp;(under 900 / default)</Mono>
              </Row>
              <Row>
                <Mono>fullHeight</Mono>
                <Mono>{layout.fullHeight}</Mono>
              </Row>
              <Row>
                <Mono>closedHeight</Mono>
                <Mono>{layout.closedHeight}</Mono>
              </Row>
              <Row>
                <Mono>gap</Mono>
                <Mono>{layout.gap}</Mono>
              </Row>
              <Row>
                <Mono>background</Mono>
                <Mono>{layout.background}</Mono>
              </Row>
              <Row>
                <Mono>fontStack</Mono>
                <Mono>{layout.fontStack.split(',')[0]}</Mono>
              </Row>
            </div>
          </Stack>
        </Section>

        {/* ---------- type ---------- */}
        <Section>
          <Stack>
            <Title>Type</Title>
            <div>
              {Object.entries(text).map(([name, t]) => (
                <Row key={name}>
                  <Mono>{name}</Mono>
                  <div>
                    <div
                      style={{
                        fontFamily: layout.fontStack,
                        fontSize: t.fontSize,
                        fontWeight: t.fontWeight,
                        lineHeight: t.lineHeight,
                        letterSpacing: t.letterSpacing,
                        color: t.color,
                      }}
                    >
                      The quick brown fox
                    </div>
                    <Mono>
                      {t.fontSize} / {t.fontWeight} / {t.lineHeight} / {t.letterSpacing} /{' '}
                      {t.color}
                    </Mono>
                  </div>
                </Row>
              ))}
            </div>
            <Body muted>
              Body also takes a <Mono>muted</Mono> flag, which swaps the colour for
              colors.blk40 ({colors.blk40}).
            </Body>
          </Stack>
        </Section>

        {/* ---------- colour ---------- */}
        <Section>
          <Stack>
            <Title>Colour — {Object.keys(colors).length} tokens</Title>
            <Swatches>
              {Object.entries(colors).map(([name, hex]) => (
                <div key={name}>
                  <Chip $hex={hex} />
                  <Mono>
                    {name}
                    <br />
                    {hex}
                  </Mono>
                </div>
              ))}
            </Swatches>
            <Body muted>
              The layout system currently uses blk40 for muted text and gre10 for tinted
              panels. The rest are unused by the new components.
            </Body>
          </Stack>
        </Section>

        {/* ---------- breakpoints ---------- */}
        <Section>
          <Stack>
            <Title>Breakpoints</Title>
            <div>
              {breakpoints.map((bp) => (
                <Row key={bp}>
                  {/* the alias is looked up by value, so renaming one in the
                      theme renames it here with no edit */}
                  <Mono>breakpoints[{aliasOf(breakpoints, bp)}]</Mono>
                  <Mono>{bp}</Mono>
                </Row>
              ))}
            </div>
          </Stack>
        </Section>

        {/* ---------- components ---------- */}
        <Section>
          <Stack>
            <Title>Section variants</Title>

            <Body muted>
              variant=&quot;fit&quot; — content height, {layout.sectionPadding[1]} top and
              bottom. This is the default.
            </Body>
            <Demo>
              <Section>
                <Body>Content sits here, capped at {layout.maxWidth} and centred.</Body>
              </Section>
            </Demo>

            <Body muted>
              variant=&quot;bleed&quot; — no gutter, no cap. For galleries and full-width
              media.
            </Body>
            <Demo>
              <Section variant="bleed">
                <Bar $size="100%" />
              </Section>
            </Demo>

            <Body muted>
              variant=&quot;full&quot; — {layout.fullHeight} tall, contents vertically
              centred. Not rendered here, as it would fill the screen.
            </Body>
          </Stack>
        </Section>

        {/* ---------- legacy ---------- */}
        <Section>
          <Stack>
            <Title>Legacy scales — read before using</Title>

            <Note>
              <Body>
                These two arrays are read by styled-system props on the 20 pages that have
                not moved to the layout system. Their indices are load bearing: adding or
                reordering an entry shifts every one of those pages at once.
              </Body>
            </Note>

            <Body muted>
              fontSizes — note there is no 14px entry, which is why body copy on newer
              pages is written as a literal.
            </Body>
            <div>
              {fontSizes.map((size, i) => (
                <Row key={size}>
                  <Mono>fontSizes[{i}]</Mono>
                  <Mono>{size}</Mono>
                </Row>
              ))}
            </div>

            <Note>
              <Body>
                spaces is exported under the key <Mono>spaces</Mono>, but styled-system
                reads <Mono>theme.space</Mono>. That is undefined, so p and m props fall
                back to styled-system&rsquo;s own scale [0, 4, 8, 16, 32, 64, 128]. The two
                agree at index 4 and nowhere else — the column on the right is what you
                actually get.
              </Body>
            </Note>
            <div>
              {spaces.map((size, i) => {
                const actual = [0, 4, 8, 16, 32, 64, 128][i];
                const agrees = `${actual}px` === size;
                return (
                  <Row key={size}>
                    <Mono>spaces[{i}]</Mono>
                    <Mono>
                      theme says {size} → actually renders {actual}px{' '}
                      {agrees ? '✓' : '⚠'}
                    </Mono>
                  </Row>
                );
              })}
            </div>
          </Stack>
        </Section>
      </Page>
    </ThemeProvider>
  );
}

export default DesignSystem;
