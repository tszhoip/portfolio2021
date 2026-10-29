import React, { useState } from 'react'
import { Wrap, Container } from '../component/Core'
import styled from 'styled-components'

// Single source for the address published in all three documents, so
// changing where enquiries land is a one-line edit.
const CONTACT_EMAIL = 'm@mhzdesignoffice.com';
const EFFECTIVE_DATE = 'October 27, 2026';
const SITE_DOMAIN = 'mhzdesignoffice.com';

// Padding is set here rather than through the `p` scale prop: the theme's
// own scale and styled-system's default disagree at that index. Without
// border-box it would be added to the 100% width, overrunning the viewport
// and pushing both padding edges off-screen.
// The footer and floating menu sit outside this, so they stay edge to edge.
const Page = styled(Container)`
  box-sizing: border-box;
  padding: 16px;
  min-height: 100vh;
  background-color: #fff;
`;

const TabRow = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 48px;
  width: 100%;
`;

// Tabs read as links rather than buttons: no fill, no box, the active
// one simply underlined.
const Tab = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.blk40};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  text-underline-offset: 4px;

  &:hover {
    color: #000;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 8px 0;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.blk40};
`;

// Long legal copy, so it runs at a readable leading rather than the
// tight 1.15 the display type uses.
const Body = styled.p`
  margin: 0 0 24px 0;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.blk40};
`;

const Num = styled.span`
  padding-right: 16px;
  color: #a5a5a5;
`;

const MailLink = styled.a`
  color: inherit;
  text-decoration: underline;
`;

const Mail = () => <MailLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</MailLink>;

function Terms() {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <Page width={['100%', '100%', '100%', '80%']} flexDirection={['column', 'column', 'row', 'row']} flexWrap="no wrap" alignItems='start' justifyContent="center">

      <Wrap width="100%" flexDirection='column' justifyContent="start">

        <TabRow>
          <Tab active={activeTab === 'privacy'} onClick={() => setActiveTab('privacy')}>
            Privacy
          </Tab>
          <Tab active={activeTab === 'license'} onClick={() => setActiveTab('license')}>
            License
          </Tab>
          <Tab active={activeTab === 'shipping'} onClick={() => setActiveTab('shipping')}>
            Shipping
          </Tab>
        </TabRow>

        {/* Privacy Section */}
        {activeTab === 'privacy' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            {/* each view's leading title is the h1; the rest are h2 */}
            <SectionTitle as="h1">Privacy</SectionTitle>
            <Body>Effective date: {EFFECTIVE_DATE}</Body>
            <Body>
              Your privacy is important to us. This policy explains how MHZ Design Office (“we,” “us,” “our”) collects, uses, and protects information when you visit {SITE_DOMAIN} or purchase from us.
            </Body>

            <SectionTitle>Information we collect</SectionTitle>
            <Body>
              <Num>01</Num>Log data. When you visit our website, our servers may automatically log standard information provided by your browser. This can include your IP address, browser type and version, pages visited, the date and time of your visit, and time spent on each page. This information does not identify you personally on its own.
            </Body>
            <Body>
              <Num>02</Num>Personal information. We may ask for personal information, such as your name, email address, and billing details when you make a purchase or contact us. We only request information needed to provide or improve our services.
            </Body>

            <SectionTitle>How we collect information</SectionTitle>
            <Body>
              <Num>03</Num>We collect information by fair and lawful means, with your knowledge and consent, and we tell you why we’re collecting it and how it will be used. You may decline to provide information, though some services may not be available without it.
            </Body>

            <SectionTitle>Use of information</SectionTitle>
            <Body>
              <Num>04</Num>We use the information we collect to process orders, deliver products, respond to inquiries, and improve our website. We may share aggregated, anonymized data, such as usage trends, but never in a form that identifies you.
            </Body>

            <SectionTitle>Data storage and security</SectionTitle>
            <Body>
              <Num>05</Num>We keep personal information only as long as needed to provide our services or meet legal obligations. We use commercially reasonable measures to protect it from loss, theft, and unauthorized access, disclosure, or modification. No method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security.
            </Body>

            <SectionTitle>Cookies</SectionTitle>
            <Body>
              <Num>06</Num>We use cookies to understand how visitors use our site and to remember your preferences. A cookie is a small piece of data stored on your device. You can set your browser to refuse cookies, though some features of the site may not work properly without them. This policy covers only our own use of cookies, not cookies set by third-party services.
            </Body>
            <Body>
              <Num>07</Num>Do Not Track. Our website does not currently respond to browser “Do Not Track” signals.
            </Body>

            <SectionTitle>Third-party services</SectionTitle>
            <Body>
              <Num>08</Num>We use trusted third-party providers, such as payment processors, hosting, and analytics services, to operate our website and fulfill orders. These providers receive only the information needed to perform their tasks and may not use it for any other purpose.
            </Body>
            <Body>
              <Num>09</Num>We may disclose information when required by law, or when we believe it is necessary to protect our rights, property, or safety, or that of others.
            </Body>
            <Body>
              <Num>10</Num>We do not sell or rent your personal information to anyone.
            </Body>

            <SectionTitle>Your choices</SectionTitle>
            <Body>
              <Num>11</Num>You may request to access, correct, or delete your personal information at any time by contacting us at <Mail />. You can also unsubscribe from any marketing emails using the link in the email.
            </Body>

            <SectionTitle>Children’s privacy</SectionTitle>
            <Body>
              <Num>12</Num>Our website is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us with personal information, please contact us and we will delete it.
            </Body>

            <SectionTitle>External links</SectionTitle>
            <Body>
              <Num>13</Num>Our website may link to sites we do not operate. We are not responsible for the content or privacy practices of those sites.
            </Body>

            <SectionTitle>Changes to this policy</SectionTitle>
            <Body>
              <Num>14</Num>We may update this policy from time to time. Changes take effect when posted on this page, with an updated effective date.
            </Body>

            <SectionTitle>Contact</SectionTitle>
            <Body>Questions about this policy? Email us at <Mail />.</Body>
          </Wrap>
        )}

        {/* License Section */}
        {activeTab === 'license' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            <SectionTitle as="h1">License</SectionTitle>

            <SectionTitle>Section A — General Information</SectionTitle>
            <Body>
              This End User License Agreement (“EULA”) is between MHZ Design Office (“Supplier”) and you, the purchaser (“Licensee”). By purchasing, downloading, installing, or using font software from the Supplier, you agree to the terms of this agreement and acknowledge that:
            </Body>
            <Body>
              <Num>01</Num>This license is non-exclusive, non-assignable, and non-transferable, and grants you specific rights to use the font software (see Section C).
            </Body>
            <Body>
              <Num>02</Num>Except for the rights granted in this license, all rights are owned and retained by the Supplier.
            </Body>
            <Body>
              <Num>03</Num>The design and intellectual property of the font software belong to the Supplier.
            </Body>
            <Body>
              <Num>04</Num>The Supplier’s warranty is limited to replacing font software that does not perform substantially as described on its website. Claims must be submitted in writing within 30 days of purchase. The warranty does not cover font software that has been converted, manipulated, or modified by the Licensee. All other warranties and remedies are excluded.
            </Body>
            <Body>
              <Num>05</Num>The Supplier is not liable for any loss or damages arising from the use of the font software, including lost profits, data, business opportunities, or savings. In no event will the Supplier’s total liability exceed the amount you paid for the license.
            </Body>
            <Body>
              <Num>06</Num>The font software and all copies are protected by copyright law.
            </Body>
            <Body>
              <Num>07</Num>This license terminates automatically if you breach any of its terms. Upon termination, you must stop using and delete all copies of the font software.
            </Body>
            <Body>
              <Num>08</Num>This EULA is governed by the laws of the State of California. Any dispute arising from it will be resolved in the courts of Los Angeles County, California.
            </Body>

            <SectionTitle>Section B — Don’ts</SectionTitle>
            <Body>
              <Num>01</Num>You may not redistribute, sublicense, sell, lend, or lease the font software to any third party. This includes subsidiaries, affiliates, agencies, contractors, freelancers, or anyone working on your behalf, except as allowed in C5 and C6.
            </Body>
            <Body>
              <Num>02</Num>You may not enable remote access to the fonts through company servers or cloud services unless you have purchased a server license extension.
            </Body>
            <Body>
              <Num>03</Num>You may not upload the fonts to any public server or public Git repository accessible to people outside your organization.
            </Body>
            <Body>
              <Num>04</Num>You may not modify, rename, or convert the original font files.
            </Body>
            <Body>
              <Num>05</Num>You may not use the font software to create derivative or modified products, including adding characters for unsupported languages or creating a custom version of the typeface.
            </Body>
            <Body>
              <Num>06</Num>You may not use the fonts for user-generated content, such as invoice generation, print-on-demand, retail labeling systems, or user-editable templates.
            </Body>
            <Body>
              <Num>07</Num>This license does not cover app, game, ePub, online advertising, or electronic device use. You may not use the fonts in mobile or desktop apps, games, eBooks, HTML ads or pop-ups, email newsletters, device displays (such as appliances, POS systems, kiosks, or dashboards), or broadcast, unless your order specifies otherwise.
            </Body>

            <SectionTitle>Section C — Do’s</SectionTitle>
            <Body>
              <Num>01</Num>The Desktop license allows you to install the fonts on up to 3 computers within a single company or organization (see B1), unless your order specifies otherwise. You may use them to create static print and digital work, such as posters, books, packaging, promotional materials, and social media graphics, as well as video content such as YouTube videos.
            </Body>
            <Body>
              <Num>02</Num>Organizations with up to 50 employees may use the fonts for logos, wordmarks, and physical retail products such as apparel or hardware. Larger organizations must purchase a license extension.
            </Body>
            <Body>
              <Num>03</Num>There is no limit on the number of prints or views. The Desktop license is perpetual and requires no subscription.
            </Body>
            <Body>
              <Num>04</Num>The Web license allows you to self-host the fonts on a single domain with up to 10,000 visitors per month, unless your order specifies otherwise. The Web license is perpetual and requires no subscription.
            </Body>
            <Body>
              <Num>05</Num>You may share OTF and TTF files with your printer or prepress provider, for a specific project, solely to prepare and print your materials.
            </Body>
            <Body>
              <Num>06</Num>You may share WOFF and WOFF2 files with your web developer, for a specific project, solely to implement the fonts on your website.
            </Body>
          </Wrap>
        )}

        {/* Shipping Section */}
        {activeTab === 'shipping' && (
          <Wrap width="100%" flexDirection='column' justifyContent="start">
            <SectionTitle as="h1">Shipping &amp; Delivery</SectionTitle>
            <Body>All products are digital. No physical items will be shipped.</Body>

            <SectionTitle>Delivery Time</SectionTitle>
            <Body>
              Download links are available immediately after payment is confirmed, usually within seconds, and are also sent to the email address used at checkout.
            </Body>

            <SectionTitle>Returns &amp; Refunds</SectionTitle>
            <Body>
              <Num>01</Num>Because our products are digital and available for immediate download, all sales are final. We do not offer refunds or exchanges, except where required by law.
            </Body>
            <Body>
              <Num>02</Num>If you have a technical issue with your purchase, contact us at <Mail /> within 30 days of purchase and we’ll help resolve it.
            </Body>
          </Wrap>
        )}

      </Wrap>
    </Page>
  );
}

export default Terms;
