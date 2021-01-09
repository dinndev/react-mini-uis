import React from 'react'
import propType from 'prop-types'
import styled from 'styled-components'

export function Typography({ component, children }) {
  const Paragraph = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
    font-family: 'Source Sans Pro', sans-serif;
    max-width: 70%;
    color: #272343;
  `
  const H1 = styled.h1`
    max-width: 70%;
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
