import React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { Type } from './Type';

/**
 * EmptyState - the "closed" state Shop and Archive share.
 *
 * Both pages carried a byte-identical copy of this wrapper before; it now
 * lives here once. It is content height: the heading and note take the room
 * they need and the global footer follows directly below.
 */

const Centred = styled.div`
  width: 100%;
  min-height: ${(props) => props.theme.layout.fitContent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${(props) => props.theme.layout.gap};
`;

export const EmptyState = ({ title, note }) => (
  <Section>
    <Centred>
      <Type as="h1" size="L">{title}</Type>
      {/* rendered even when empty so the heading does not shift on load */}
      <Type size="M" muted>{note}</Type>
    </Centred>
  </Section>
);

export default EmptyState;
