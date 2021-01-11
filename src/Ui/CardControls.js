import React from 'react'
import styled from 'styled-components'

export function CardControls({ children }) {
  const Controls = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px 10px 20px;
    align-items: start;
  `
  return <Controls>{children}</Controls>
}
