import React from 'react'
import { Wrap, Text, H1, Container, Span } from '../component/Core'

function License() {
  return (
    <Container width={['100%','100%','100%','80%']} flexDirection={['column', 'column', 'row', 'row']} p='4' flexWrap="no wrap" alignItems='start' justifyContent="center">

      <Wrap width={["100%", "100%", "33.3%", "33.3%"]} flexDirection='column' justifyContent="center">
        <H1 fontFamily={[0]} color={['blk40']} fontSize={[2]}>
          Section A — General Information
        </H1>
        <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
          By purchasing, downloading, installing, using, or otherwise handling font software by the Supplier, the Licensee automatically accepts the terms of this agreement and acknowledges that:
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
        <Span color="#a5a5a5" paddingRight="16px">04</Span>The Supplier’s warranty is strictly limited to the replacement of the purchased font software in case it does not perform substantially in accordance with the specifications published on its website. To submit a claim, you must notify the Supplier in writing within 30 (thirty) days of purchase. The warranty does not apply to any font software converted, manipulated or modified by the user. All other rights and remedies are excluded.
        </Text>
        <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
        <Span color="#a5a5a5" paddingRight="16px">05</Span>The Supplier is not liable for any loss or damages caused by the use of purchased fonts, including lost profits, lost data, lost business opportunities, or lost savings.
        </Text>
        <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
        <Span color="#a5a5a5" paddingRight="16px">06</Span>The fonts and all of their copies are protected by the Copyright Act of the Czech Republic.
        </Text>
        <Text fontFamily={[0]} color={['blk40']} variant='indentpb' fontSize={[1]}>
        <Span color="#a5a5a5" paddingRight="16px">07</Span>This EULA, and any dispute arising out of or in connection with this EULA, shall be governed by and construed in accordance with the laws of the Czech Republic.
        </Text>
      </Wrap>

      <Wrap width={["100%", "100%", "33.3%", "33.3%"]} flexDirection='column' justifyContent="center">
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

      </Wrap>

      <Wrap width={["100%", "100%", "33.3%", "33.3%"]} flexDirection='column' justifyContent="center">
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

    </Container>
  );
}

export default License;
