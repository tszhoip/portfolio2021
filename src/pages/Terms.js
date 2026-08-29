import React, { useState } from 'react'
import { Wrap, Text, H1, Container, Span, Button } from '../component/Core'
import styled from 'styled-components'

const TabContainer = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 32px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
`;

const TabButton = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? '#000' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#666'};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? '#000' : '#f5f5f5'};
  }
`;

function Terms() {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <Container width={['100%', '100%', '100%', '80%']} flexDirection={['column', 'column', 'row', 'row']} p='4' flexWrap="no wrap" alignItems='start' justifyContent="center">

      <Wrap width="100%" flexDirection='column' justifyContent="start">

        <TabContainer>
          <TabButton
            active={activeTab === 'privacy'}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy
          </TabButton>
          <TabButton
            active={activeTab === 'license'}
            onClick={() => setActiveTab('license')}
          >
            License
          </TabButton>
          <TabButton
            active={activeTab === 'shipping'}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping
          </TabButton>
        </TabContainer>

        {/* Privacy Section */}
        {activeTab === 'privacy' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Privacy
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Information we collect
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>Log data — when you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered "non-identifying information", as it does not personally identify you on its own. It may include your computer's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details. <br /><br />Personal information — we may ask for personal information, such as your name and email address. This data is considered "identifying information", as it can personally identify you. We only request personal information relevant to providing you with a service, and only use it to help provide or improve this service.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              How we collect information
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>We collect information by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used. You are free to refuse our request for this information, with the understanding that we may be unable to provide you with some of your desired services without it.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Use of information
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>We may use a combination of identifying and non-identifying information to understand who our visitors are, how they use our services, and how we may improve their experience of our website in future. We do not disclose the specifics of this information publicly, but may share aggregated and anonymised versions of this information, for example, in website and customer usage trend reports.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Data processing and storage
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>We only retain personal information for as long as necessary to provide a service, or to improve our services in future. While we retain this data, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or storage is 100% secure, and cannot guarantee absolute data security.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Cookies
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit so we can understand how you use our site and serve you content based on preferences you have specified.
              <br /><br />
              If you do not wish to accept cookies from us, you should instruct your browser to refuse cookies from our website, understanding that we may be unable to provide you with some of your desired services without them. This policy covers only the use of cookies between your computer and our website; it does not cover the use of cookies by any third-party services we use on our site.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Third-party access to information
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>We may use third-party services for our website and marketing activity. These services may access our data solely for the purpose of performing specific tasks on our behalf. We do not share any personally identifying information with these services without your explicit consent. We do not give these services permission to disclose or use any of our data for any other purpose.
              <br /><br />
              We will refuse government and law enforcement requests for data if we believe a request is too broad or unrelated to its stated purpose. However, we may cooperate if we believe the requested information is necessary and appropriate to comply with legal process, to protect our own rights and property, to protect the safety of the public and any person, to prevent a crime, or to prevent what we reasonably believe to be illegal, legally actionable, or unethical activity.
              <br /><br />
              We do not otherwise share or supply personal information to third parties. We do not sell or rent your personal information to marketers or third parties.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Children's Privacy
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>This website does not knowingly target or collect personal information from children. As a parent/guardian, please contact us if you believe your child is participating in an activity involving personal information on our website, and you have not received a notification or request for consent. We do not use your supplied contact details for marketing or promotional purposes.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Limits of our policy
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>This privacy policy only covers our own collecting and handling of data. We only work with partners, affiliates and third-party providers whose privacy policies align with ours, however we cannot accept responsibility or liability for their respective privacy practices.
              <br/><br/>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
            </Text>
          </Wrap>
        )}

        {/* License Section */}
        {activeTab === 'license' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              License
            </H1>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Section A — General Information
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              By purchasing, downloading, installing, using, or otherwise handling font software, you automatically accept the terms of this agreement and acknowledge that:
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>This license is non-exclusive, non-assignable and non-transferable, which grants you certain rights to use the font software (see section C).
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>Except for your right to use the font software granted by this license, all other rights are owned and retained by the Supplier.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>The intellectual property of the design contained in the font software is owned by the Supplier.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">04</Span>The Supplier's warranty is strictly limited to the replacement of the purchased font software in case it does not perform substantially in accordance with the specifications published on its website. To submit a claim, you must notify the Supplier in writing within 30 (thirty) days of purchase. The warranty does not apply to any font software converted, manipulated or modified by the user. All other rights and remedies are excluded.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">05</Span>The Supplier is not liable for any loss or damages caused by the use of purchased fonts, including lost profits, lost data, lost business opportunities, or lost savings.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">06</Span>The fonts and all of their copies are protected by copyright law.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">07</Span>This EULA, and any dispute arising out of or in connection with this EULA, shall be governed by and construed in accordance with applicable law.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Section B — Don'ts
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              01   You are not authorized to redistribute, sublicense, sell, lend, or lease purchased font software to any 3rd parties (including subsidiary company, affiliate company, servicing and production company, design agency, self-employed parties, or any other 3rd party carrying out work on behalf of the Licensee — for exceptions, see C5 and C6).
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              02   You must not enable remote access to your fonts via company servers or cloud solutions unless you purchased a server-use license extension.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              03   You must not upload the fonts to any public server or public GIT repository available to users outside your organisation or entity.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              04   You must not modify, rename or convert the original font software file under any circumstance.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              05   You are not allowed to use the original font software file to create a derivative or modified product or design, including creating characters for alphabets and languages not covered by the typeface or designing a custom version of the typeface.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              06   You are not allowed to use the fonts for user-generated content (generating invoices, print-on-demand, retail labelling solutions, user-editable documents or similar).
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              07   This document does not cover App/Game/ePub License, Online Advertising License or Electronic Device License. You are not allowed to use the fonts within a mobile or desktop app, game, eBook, HTML advertising, HTML pop-ups, e-mail newsletters, device displays (such as entertainment products, household appliances, digital POS, ticket machines, dashboards), broadcasting or similar specific situations, unless specified otherwise in your order.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Section C — Do's
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              01   The Desktop license grants you the right to install fonts locally on 3 computers within a single company/organisation (see B1), unless specified otherwise in your order. It allows you to generate static printed and digital imagery (such as posters, books, promotional materials, packaging or social media images) and moving pictures (such as YouTube videos).
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              02   Organisations with up to 50 employees may use the fonts to generate logos, wordmarks or physical retail products (such as clothing or hardware). Larger organisations are required to obtain a license extension.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              03   You are not limited by the number of prints or views. The Desktop license is perpetual and does not require a subscription.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              04   The Web license grants you the right to self-host fonts for a single domain with up to 10k visitors/month, unless specified otherwise in your order. The Web license is perpetual and does not require a subscription.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              05  You may provide a copy of OTF and TTF font files to your printer or preprint facility, in the scope of a defined project, only in order to prepare for printing and print your documents.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              06   You may provide a copy of WOFF and WOFF2 font files to a web developer, in the scope of a defined project, only in order to implement the font software into the website.
            </Text>
          </Wrap>
        )}

        {/* Shipping Section */}
        {activeTab === 'shipping' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Shipping & Delivery
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              All digital products are delivered immediately upon purchase. No physical shipping is required.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Returns & Refunds
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>All sales are final. Since our products are digital and can be immediately downloaded, we do not offer refunds or exchanges.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>If you experience any technical issues with your purchase, please contact our support team within 30 days of purchase for assistance.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Delivery Time
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              Digital products are available for download immediately after successful payment processing, typically within a few seconds.
            </Text>
          </Wrap>
        )}

      </Wrap>
    </Container>
  );
}

export default Terms;
