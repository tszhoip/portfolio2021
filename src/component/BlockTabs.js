import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap,ContainerBase } from './Core';



export const BlockTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ThemeProvider theme={base}>
      <Wrap width={['100%','50%','50%','33.3%']} height={["180px","240px","280px","320px"]}  flexDirection='column' alignItems='start' overflow="hidden" justifyContent="start" bg="#e5e5e5">
        <Wrap p={[2]} bg="#e5e5e5">
          {tabs.map((tab, index) => (
            <div
              key={index}
              style={{
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontFamily: 'Helvetica',
                backgroundColor: activeTab === index ? '#666' : '#f5f5f5',
                color: activeTab === index ? '#F5F5F5' : '#999',
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
            <Wrap width={['100%','90%','80%','80%']} key={index} 
              style={{
                fontFamily: 'Helvetica',
                borderRadius: '8px',
                color: '#666',
                display: activeTab === index ? 'block' : 'none'
              }}>
              {tab.content}
            </Wrap>
           
          ))}
      </Wrap>
    </ThemeProvider>
  )
}
