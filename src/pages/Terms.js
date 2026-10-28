import React, { useState } from 'react'
import { Wrap, Text, H1, Container, Span } from '../component/Core'
import styled from 'styled-components'

// Single source for the address published in all three documents, so
// changing where enquiries land is a one-line edit.
const CONTACT_EMAIL = 'mhan0528@gmail.com';
const EFFECTIVE_DATE = 'October 27, 2026';
const SITE_DOMAIN = 'mhzdesignoffice.com';

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

const MailLink = styled.a`
  color: inherit;
  text-decoration: underline;
`;

const Mail = () => <MailLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</MailLink>;

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
              Effective date: {EFFECTIVE_DATE}
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              Your privacy is important to us. This policy explains how MHZ Design Office (“we,” “us,” “our”) collects, uses, and protects information when you visit {SITE_DOMAIN} or purchase from us.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Information we collect
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>Log data. When you visit our website, our servers may automatically log standard information provided by your browser. This can include your IP address, browser type and version, pages visited, the date and time of your visit, and time spent on each page. This information does not identify you personally on its own.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>Personal information. We may ask for personal information, such as your name, email address, and billing details when you make a purchase or contact us. We only request information needed to provide or improve our services.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              How we collect information
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>We collect information by fair and lawful means, with your knowledge and consent, and we tell you why we’re collecting it and how it will be used. You may decline to provide information, though some services may not be available without it.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Use of information
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">04</Span>We use the information we collect to process orders, deliver products, respond to inquiries, and improve our website. We may share aggregated, anonymized data, such as usage trends, but never in a form that identifies you.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Data storage and security
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">05</Span>We keep personal information only as long as needed to provide our services or meet legal obligations. We use commercially reasonable measures to protect it from loss, theft, and unauthorized access, disclosure, or modification. No method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Cookies
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">06</Span>We use cookies to understand how visitors use our site and to remember your preferences. A cookie is a small piece of data stored on your device. You can set your browser to refuse cookies, though some features of the site may not work properly without them. This policy covers only our own use of cookies, not cookies set by third-party services.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">07</Span>Do Not Track. Our website does not currently respond to browser “Do Not Track” signals.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Third-party services
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">08</Span>We use trusted third-party providers, such as payment processors, hosting, and analytics services, to operate our website and fulfill orders. These providers receive only the information needed to perform their tasks and may not use it for any other purpose.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">09</Span>We may disclose information when required by law, or when we believe it is necessary to protect our rights, property, or safety, or that of others.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">10</Span>We do not sell or rent your personal information to anyone.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Your choices
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">11</Span>You may request to access, correct, or delete your personal information at any time by contacting us at <Mail />. You can also unsubscribe from any marketing emails using the link in the email.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Children’s privacy
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">12</Span>Our website is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us with personal information, please contact us and we will delete it.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              External links
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">13</Span>Our website may link to sites we do not operate. We are not responsible for the content or privacy practices of those sites.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Changes to this policy
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">14</Span>We may update this policy from time to time. Changes take effect when posted on this page, with an updated effective date.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Contact
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              Questions about this policy? Email us at <Mail />.
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
              This End User License Agreement (“EULA”) is between MHZ Design Office (“Supplier”) and you, the purchaser (“Licensee”). By purchasing, downloading, installing, or using font software from the Supplier, you agree to the terms of this agreement and acknowledge that:
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>This license is non-exclusive, non-assignable, and non-transferable, and grants you specific rights to use the font software (see Section C).
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>Except for the rights granted in this license, all rights are owned and retained by the Supplier.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>The design and intellectual property of the font software belong to the Supplier.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">04</Span>The Supplier’s warranty is limited to replacing font software that does not perform substantially as described on its website. Claims must be submitted in writing within 30 days of purchase. The warranty does not cover font software that has been converted, manipulated, or modified by the Licensee. All other warranties and remedies are excluded.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">05</Span>The Supplier is not liable for any loss or damages arising from the use of the font software, including lost profits, data, business opportunities, or savings. In no event will the Supplier’s total liability exceed the amount you paid for the license.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">06</Span>The font software and all copies are protected by copyright law.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">07</Span>This license terminates automatically if you breach any of its terms. Upon termination, you must stop using and delete all copies of the font software.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">08</Span>This EULA is governed by the laws of the State of California. Any dispute arising from it will be resolved in the courts of Los Angeles County, California.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Section B — Don’ts
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>You may not redistribute, sublicense, sell, lend, or lease the font software to any third party. This includes subsidiaries, affiliates, agencies, contractors, freelancers, or anyone working on your behalf, except as allowed in C5 and C6.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>You may not enable remote access to the fonts through company servers or cloud services unless you have purchased a server license extension.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>You may not upload the fonts to any public server or public Git repository accessible to people outside your organization.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">04</Span>You may not modify, rename, or convert the original font files.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">05</Span>You may not use the font software to create derivative or modified products, including adding characters for unsupported languages or creating a custom version of the typeface.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">06</Span>You may not use the fonts for user-generated content, such as invoice generation, print-on-demand, retail labeling systems, or user-editable templates.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">07</Span>This license does not cover app, game, ePub, online advertising, or electronic device use. You may not use the fonts in mobile or desktop apps, games, eBooks, HTML ads or pop-ups, email newsletters, device displays (such as appliances, POS systems, kiosks, or dashboards), or broadcast, unless your order specifies otherwise.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Section C — Do’s
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>The Desktop license allows you to install the fonts on up to 3 computers within a single company or organization (see B1), unless your order specifies otherwise. You may use them to create static print and digital work, such as posters, books, packaging, promotional materials, and social media graphics, as well as video content such as YouTube videos.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>Organizations with up to 50 employees may use the fonts for logos, wordmarks, and physical retail products such as apparel or hardware. Larger organizations must purchase a license extension.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">03</Span>There is no limit on the number of prints or views. The Desktop license is perpetual and requires no subscription.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">04</Span>The Web license allows you to self-host the fonts on a single domain with up to 10,000 visitors per month, unless your order specifies otherwise. The Web license is perpetual and requires no subscription.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">05</Span>You may share OTF and TTF files with your printer or prepress provider, for a specific project, solely to prepare and print your materials.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">06</Span>You may share WOFF and WOFF2 files with your web developer, for a specific project, solely to implement the fonts on your website.
            </Text>
          </Wrap>
        )}

        {/* Shipping Section */}
        {activeTab === 'shipping' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Shipping &amp; Delivery
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              All products are digital. No physical items will be shipped.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Delivery Time
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              Download links are available immediately after payment is confirmed, usually within seconds, and are also sent to the email address used at checkout.
            </Text>

            <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
              Returns &amp; Refunds
            </H1>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">01</Span>Because our products are digital and available for immediate download, all sales are final. We do not offer refunds or exchanges, except where required by law.
            </Text>
            <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
              <Span color="#a5a5a5" paddingRight="16px">02</Span>If you have a technical issue with your purchase, contact us at <Mail /> within 30 days of purchase and we’ll help resolve it.
            </Text>
          </Wrap>
        )}

      </Wrap>
    </Container>
  );
}

export default Terms;
