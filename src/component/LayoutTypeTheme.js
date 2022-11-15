import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Base = styled.p`
    color: darkgrey;
`

const BaseTitle = styled(Base)`
    color: black;
`

const Box = styled.div`
order: ${props => props.o};
width: ${props => props.theme.col};
box-shadow: 0px 0px 1px black inset;
`
const Padding = styled.div`
padding: 8px 5% 10px 8px;
`
Box.defaultProps = {
  theme: {
    col: "100%"

  }
}

const w50 = {
  col: "50%"
}

const w25 = {
  col: "25%"
}

export const OneLn = (props) => {
  return (
    <Box theme="w25">
      <Padding>
        <Base lang={props.lang}>
          {props.title}
        </Base>
      </Padding>
    </Box>
  )
};

