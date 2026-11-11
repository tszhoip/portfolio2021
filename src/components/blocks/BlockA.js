import React from 'react';
import styled from 'styled-components';
import { Type } from '../layout/Type';

/**
 * BlockA - the credits block. A label above its text, pairs laid into two
 * columns.
 *
 *   <BlockA items={[
 *     { label: 'Role', body: 'Design Lead' },
 *     { label: 'Description / EN', body: ['First para.', 'Second para.'] },
 *   ]} />
 *
 * The list arrives flat and in reading order. Splitting it across columns is
 * a layout decision, so it is made here - first half left, second half right,
 * each column flowing at its own height - rather than written into every
 * project. Same for which size a label is and how far it sits from its text:
 * the content file carries words and order, nothing else.
 */

const Grid = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.space.snug};
  padding-bottom: ${(props) => props.theme.layout.space.loose};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.layout.space.loose};

  @media (min-width: ${(props) => props.theme.breakpoints.S}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${(props) => props.theme.layout.gap.snug};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.layout.space.loose};
`;

/* Label and text are one unit, so the gap between them belongs to the pair
   and the gap between pairs belongs to the column. Two gaps, two owners. */
const Pair = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.layout.space.tight};
`;

const Label = styled(Type)`
  color: ${(props) => props.theme.colors.blk70};
`;

const paragraphs = (body) => (Array.isArray(body) ? body : [body]);

export const BlockA = ({ items = [] }) => {
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <Grid>
      {columns.map((column, columnIndex) => (
        <Column key={columnIndex}>
          {column.map(({ label, body }) => (
            <Pair key={label}>
              <Label size="M">{label}</Label>
              {paragraphs(body).map((paragraph) => (
                <Type key={paragraph.slice(0, 40)} size="M">
                  {paragraph}
                </Type>
              ))}
            </Pair>
          ))}
        </Column>
      ))}
    </Grid>
  );
};

export default BlockA;
