import React from 'react'
import styled from 'styled-components'
import propType from 'prop-types'

export function Button({ children, size, theme }) {
  const handleTheme = (theme) => {
    switch (theme) {
      case 'PRIMARY':
        return 'background-color: #30475e; color: white;'
      case 'DARK':
        return 'background-color: black; color: white;'
      case 'SUCCESS':
        return 'background-color: #aee6e6; color: white;'
      case 'DANGER':
        return 'background-color: #f05454; color: white;'
      case 'WARNING':
        return 'background-color: #ffd56b; color: black;;'
      default:
        return 'background-color: #11698e; color:white;'
    }
  }
  const handleSizes = (size) => {
    switch (size) {
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
    ${({ theme }) => handleTheme(theme.toUpperCase())}
    ${({ size }) => handleSizes(size.toUpperCase())}
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
  Button.propType = {
    size: propType.string.isRequired,
    theme: propType.string.isRequired
  }
  return (
    <StyleButton size={size} theme={theme}>
      {children}
    </StyleButton>
  )
}

export default Button
