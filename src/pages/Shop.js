import React from 'react';
import { ThemeProvider } from 'styled-components';
import { base } from '../theme';
import { Page } from '../components/layout/Page';
import { EmptyState } from '../components/layout/EmptyState';

/**
 * Shop Page
 *
 * The shop is closed for now, so the page is a centred coming-soon state
 * rather than a product grid. Restoring it means putting the BlockThumbFont
 * listings back in place of <EmptyState>.
 */

function Shop() {
  return (
    <ThemeProvider theme={base}>
      <Page>
        <EmptyState title="Shop" note="Coming soon" />
      </Page>
    </ThemeProvider>
  );
}

export default Shop;
