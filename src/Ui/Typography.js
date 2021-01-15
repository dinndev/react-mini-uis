import React from 'react'
import propType from 'prop-types'
import styled from 'styled-components'

const handleSizes = (size) => {
  switch (size) {
    case 'xsmall':
      return 'font-size: 0.7rem'
    case 'small':
      return 'font-size: 1rem'
    case 'medium':
      return 'font-size: 1.1rem;'
    case 'large':
      return 'font-size: 1.2rem;'
    default:
      return 'font-size: 1rem;'
  }
}
const Paragraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Quicksand:wght@500&display=swap');
  font-family: 'Poppins', sans-serif;
  width: 100%;
  margin: 0;
  color: gray;
  text-align: left;
  ${({ size }) => handleSizes(size)}
`
const H1 = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
  font-family: 'Quicksand', sans-serif;
  width: 100%;
  font-size: 1rem;
  margin: 0;
  text-align: left;
  ${({ size }) => handleSizes(size)}
`
const H3 = styled.h3`
  margin: 0;
  max-width: 100%;
  text-align: left;
  ${({ size }) => handleSizes(size)}
`

export function Typography({
  component = 'paragraph',
  children,
  size = 'small'
}) {
  const handleTags = (tag) => {
    switch (tag) {
      case 'PARAGRAPH':
        return <Paragraph size={size}>{children}</Paragraph>
      case 'TITLE':
        return <H1 size={size}>{children}</H1>
      case 'HEADING':
        return <H3 size={size}>{children}</H3>
      default:
        return <Paragraph>{children}</Paragraph>
    }
  }
  return handleTags(component.toUpperCase())
}

Typography.propType = {
  component: propType.string,
  size: propType.size
}
