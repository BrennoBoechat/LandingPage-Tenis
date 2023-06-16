import React from 'react'
import { ContentContainer } from './styled'
import Jordan1 from '../../assets/img/1.png'
import Jordan2 from '../../assets/img/2.png'
import Jordan3 from '../../assets/img/3.png'
import Jordan4 from '../../assets/img/4.png'
import Jordan5 from '../../assets/img/4.png'
import Jordan6 from '../../assets/img/6.png'
import Jordan7 from '../../assets/img/7.png'
import Jordan8 from '../../assets/img/8.png'

function Content() {
  return (
    <ContentContainer>
        <div className='content-text'>
            <h1>Destaques</h1>
            <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
        </div>

        <div className='sneaker-area'>
          <div className='sneaker-background'>
              <img src={Jordan1}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan2}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan3}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan4}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan5}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan6}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan7}/>
          </div>

          <div className='sneaker-background'>
              <img src={Jordan8}/>
          </div>
        </div>
    </ContentContainer>
  )
}

export default Content