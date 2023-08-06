import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';
import { Wrap,ContainerBase } from './Core';



export const BlockTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ThemeProvider theme={base}>
      <Wrap width={['100%','100%','67%','50%']} height={["560px","640px","640px","720px"]}  flexDirection='column' alignItems='center' overflow="hidden" justifyContent="start" bg="white" >
        <Wrap p={[2]}>
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
            <Wrap width={['100%']} height={['100%']} key={index} alignItems='center' justifyContent="center" 
              style={{
                display: activeTab === index ? 'block' : 'none'
              }}>
              {tab.content}
            </Wrap>
           
          ))}
      </Wrap>
    </ThemeProvider>
  )
}
