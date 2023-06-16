import React from 'react'
import { HeaderContainer } from './styled'

function Header() {
  return (
    <HeaderContainer>
        <div className='discount'>
            <h3>Ganhe R$ 10,00 de desconto no frete</h3>
        </div>

        <div className='name'>
            <h1>JordanShoes</h1>
        </div>
    </HeaderContainer>
  )
}

export default Header