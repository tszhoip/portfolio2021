import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { color, space, layout, flexbox, position, width, zIndex } from "styled-system";
import { base } from '../theme';
import { Thumbnail, Wrap, H1, Text, Button, ContainerBase } from './Core';



export const BlockTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ThemeProvider theme={base}>
      <ContainerBase width='100%' flexDirection='column' flexWrap="wrap" alignItems='start' justifyContent="start">
        <Wrap p={[2]}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              style={{
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontFamily: 'Helvetica',
                backgroundColor: activeTab === index ? '#666' : '#e1e1e1',
                color: activeTab === index ? '#e5e5e5' : '#999999',
                borderRadius: '20px',
                marginRight: '8px',
              }}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </div>
          ))}
        </Wrap>
          {tabs.map((tab, index) => (
             <ContainerBase width='100%' backgroundColor="#f5f5f5" p="2" alignItems='start' justifyContent="start">
            <Wrap width={['90%','90%','80%','80%']} height={["55vh","60vh","65vh","70vh"]} key={index}
              style={{
                fontFamily: 'Helvetica',
                borderRadius: '8px',
                color: 'black',
                display: activeTab === index ? 'block' : 'none'
              }}>
              {tab.content}
            </Wrap>
            </ContainerBase>
          ))}
      </ContainerBase>
    </ThemeProvider>
  )
}
