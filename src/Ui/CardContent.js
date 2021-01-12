import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  flex-direction: column;
  padding: 20px;
`
export function CardContent({ children }) {
  return <Container>{children}</Container>
}
