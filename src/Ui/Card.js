import React from 'react'
import styled from 'styled-components'
import propType from 'prop-types'

export function Card({ children, size }) {
  const Card = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    max-width: ${size ? `${size}px` : '350px'};
    height: ${size ? `${size}px` : 'auto'};
    box-shadow: 2px 0px 45px 0px rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 2px 0px 45px 0px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 2px 0px 45px 0px rgba(0, 0, 0, 0.12);
  `
  return <Card>{children}</Card>
}
Card.propType = {
  size: propType.string.isRequired
}
