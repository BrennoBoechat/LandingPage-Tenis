import React from 'react'
import Bannerimg from "../../assets/img/JordanBanner.png"
import { BannerContainer } from './styled'

function Banner() {
  return (
    <BannerContainer>
        <div className='image'>
            <img src={Bannerimg}/>
            <div className='image-text'>
                <h1>A melhor loja de Jordan</h1>
                <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
            </div>
        </div>
    </BannerContainer>
  )
}

export default Banner