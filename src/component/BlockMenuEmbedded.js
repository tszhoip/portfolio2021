import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { base } from '../theme';
import { BlockMenu } from './Block';


export const BlockMenuEmbedded = (props) => {

  return (
    <ThemeProvider theme={base}>

          <BlockMenu />

    </ThemeProvider>
  )
};

