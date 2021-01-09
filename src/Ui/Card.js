import React from 'react'
import styled from 'styled-components'
import propType from 'prop-types'

export function Card({ children, size }) {
  const Card = styled.div`
    max-width: ${size};
  `
  return <Card>{children}</Card>
}
Card.propType = {
  size: propType.string.isRequired
}
