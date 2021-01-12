import React from 'react'
import styled from 'styled-components'
import propType from 'prop-types'

const handleTheme = (color) => {
  switch (color) {
    case 'PRIMARY':
      return 'background-color: #30475e; color: white;'
    case 'DARK':
      return 'background-color: black; color: white;'
    case 'SUCCESS':
      return 'background-color: #aee6e6; color: white;'
    case 'DANGER':
      return 'background-color: #f05454; color: white;'
    case 'WARNING':
      return 'background-color: #ffd56b; color: black;'
    case 'TRANSPARENT':
      return 'background-color: transparent; color: black;'
    default:
      return 'background-color: #11698e; color:white;'
  }
}
const handleSizes = (size) => {
  switch (size) {
    case 'XSMALL':
      return 'padding: 0.4rem 1rem 0.4rem 1rem; font-size: 0.8rem;'
    case 'SMALL':
      return 'padding: 0.5rem 1.5rem 0.5rem 1.5rem; font-size: 0.8rem;'
    case 'MEDIUM':
      return 'padding: 0.5rem 3rem 0.5rem 3rem;'
    case 'LARGE':
      return 'padding: 0.7rem 3.5rem 0.7rem 3.5rem; font-size: 0.9rem;'
    default:
      return 'padding: 0.5rem 1.5rem 0.5rem 1.5rem; font-size: 0.8rem;'
  }
}

const StyleButton = styled.button`
  ${({ color }) => handleTheme(color.toUpperCase())}
  ${({ size }) => handleSizes(size.toUpperCase())}
  font-size: 0.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  transition: all 0.3s ease;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  border-radius: 100px;
  &:hover {
    transform: translateY(-3px);
  }
`
export function Button({ children, size = 'xsmall', color = 'dark' }) {
  return (
    <StyleButton size={size} color={color}>
      {children}
    </StyleButton>
  )
}
Button.propType = {
  size: propType.string.isRequired,
  theme: propType.string.isRequired
}

export default Button
