import React from 'react'
import styled from 'styled-components'
const Controls = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 10px 20px;
  align-items: start;
`

export function CardControls({ children }) {
  return <Controls>{children}</Controls>
}
