import React from 'react'
import styled from 'styled-components'

export function CardMedia({ image, title, size }) {
  const Img = styled.img`
    object-fit: cover;
    height: ${size ? `${size}%` : '40%'};
    width: 100%;
  `
  return <Img alt={title} src={image} />
}
