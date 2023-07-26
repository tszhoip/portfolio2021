import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap,ContainerBase } from './Core';



export const BlockTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ThemeProvider theme={base}>
      <Wrap width={['50%','50%','50%','33.3%']} height={["320px","340px","380px","420px"]}  flexDirection='column' alignItems='start' justifyContent="start">
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
             <Wrap width='100%' backgroundColor="#f5f5f5" alignItems='start' justifyContent="start">
            <Wrap width={['90%','90%','80%','80%']} key={index}
              style={{
                fontFamily: 'Helvetica',
                borderRadius: '8px',
                color: 'black',
                display: activeTab === index ? 'block' : 'none'
              }}>
              {tab.content}
            </Wrap>
            </Wrap>
          ))}
      </Wrap>
    </ThemeProvider>
  )
}
