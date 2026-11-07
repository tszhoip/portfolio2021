import styled from 'styled-components';

/**
 * Page - the outer shell every route's body sits in.
 *
 *   <Page>
 *     <Section>...</Section>
 *     <Section variant="full">...</Section>
 *   </Page>
 *
 * The menu and footer are not in here. App.js renders <BlockFooter /> once
 * and PageWrapper renders <BlockMenuFloating /> once, so both are already
 * global and a page must not repeat them.
 *
 * Width is NOT capped here. The cap lives inside <Section> so that a section
 * can carry a full-bleed background while its text still stops at maxWidth.
 */
export const Page = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.background || props.theme.layout.background};
  font-family: ${(props) => props.theme.layout.fontStack};
`;

export default Page;
