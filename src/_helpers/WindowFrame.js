import React from 'react'
import styled from 'styled-components'
import { Color } from '../theme'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background-color: ${Color.black};
  color: ${Color.white}
`

const WindowFrame = ({children}) =>
<Container>
  { children }
</Container>

export default WindowFrame
