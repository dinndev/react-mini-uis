import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  height: ${({ size }) => (size ? `${size}%` : '40%')};
  width: 100%;
`

export function CardMedia({
  image = 'https://images.pexels.com/photos/4904569/pexels-photo-4904569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title = 'Gurl',
  size = '40%'
}) {
  return <Img size={size} alt={title} src={image} />
}
