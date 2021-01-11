import React from 'react'
import propType from 'prop-types'
import styled from 'styled-components'

export function Typography({
  component = 'Paragraph',
  children,
  size = 'small'
}) {
  const handleSizes = (size) => {
    switch (size) {
      case 'SMALL':
        return 'font-size: 0.9rem'
      case 'MEDIUM':
        return 'font-size: 1.5rem;'
      case 'LARGE':
        return 'font-size: 2rem;'
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
  `
  const H3 = styled.h3`
    margin: 0;
    max-width: 70%;
    text-align: left;
  `
  const handleTags = (tag) => {
    switch (tag) {
      case 'Paragraph':
        return <Paragraph>{children}</Paragraph>
      case 'TITLE':
        return <H1>{children}</H1>
      case 'HEADING':
        return <H3>{children}</H3>
      default:
        return <Paragraph>{children}</Paragraph>
    }
  }
  return handleTags(component.toUpperCase())
}

Typography.propType = {
  component: propType.string
}
