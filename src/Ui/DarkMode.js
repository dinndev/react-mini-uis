import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

// const Button = styled.btn`
//   background-color: ;
// `

export function DarkMode() {
  const [theme, setTheme] = useState('light')
  return <Button onClick={() => setTheme(!theme)}>Ola</Button>
}
