import React from 'react';
import styled from 'styled-components';
import { Type } from '../layout/Type';

/**
 * BlockB - the headline panel. One or more lines knocked out white on a black
 * band that bleeds the full width of the page.
 *
 *   <BlockB lines={['Canoo', 'A brand identity that...']} />
 *   <BlockB lines={['Build for the work. Not the showroom.']} />
 *
 * Every line is deliberately the same style. Only the first is a heading -
 * the rest are paragraphs that happen to look identical, which is the point
 * of keeping tag and style on separate axes.
 *
 * The text block holds half the width and stops at 720px, so the line length
 * stays readable however wide the band gets, and goes full width below M
 * where half a column is too narrow to set type in.
 */

const Panel = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.blk00};
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  padding: ${(props) => props.theme.layout.space.snug};
  padding-bottom: ${(props) => props.theme.layout.space.loose};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.layout.space.snug};

  @media (min-width: ${(props) => props.theme.breakpoints.M}) {
    width: 50%;
  }
`;

export const BlockB = ({ lines = [] }) => (
  <Panel>
    <Content>
      {lines.map((line, index) => (
        <Type key={line} as={index === 0 ? 'h1' : 'p'} size="L" color="#fff">
          {line}
        </Type>
      ))}
    </Content>
  </Panel>
);

export default BlockB;
