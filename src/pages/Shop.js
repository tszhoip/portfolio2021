import React from 'react';
import styled from 'styled-components';
import { Wrap, Text, H1, Container } from '../component/Core';

/**
 * Shop Page
 *
 * The shop is closed for now, so the page is a centred coming-soon state
 * rather than a product grid. Restoring it means putting the BlockThumbFont
 * listings back in place of <Centred>.
 */

// The global footer sits below this, so leave room for it rather than
// filling the whole viewport, which would push the text visually high.
const Centred = styled(Wrap)`
  width: 100%;
  min-height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function Shop() {
  return (
    <Container
      width={['100%', '100%', '100%', '80%']}
      flexDirection={['column']}
      p="4"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <Centred>
        <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]} marginBottom="8px">
          Shop
        </H1>

        <Text fontFamily={[0]} color={['blk40']} fontSize={[1]} margin="0">
          Coming soon
        </Text>
      </Centred>
    </Container>
  );
}

export default Shop;
