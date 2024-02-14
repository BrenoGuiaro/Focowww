import React from 'react'
import '../CSS/Alimentacao.css'
import { IoMdDownload as Download } from "react-icons/io";
import { FaGooglePlay as Play } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";

export const Alimentacao = () => {

  return (
    <div className='fundoGro'>
      <div className='boxTitle'>
        <p className='ti'>Alimentação</p>
      </div>

      <div className='aplicativo'>
        <div className='imgAp'>
          <div className='baixo'>
            <p className='name'>Aplicativo</p>
            <p className='inst'><Download className='dow' />Instalar</p>
            <div className='info'>

              <a href='https://play.google.com/store/apps/details?id=br.com.dietaetreino' style={{ textDecoration: 'none' }}><div className='divPlay'>
                <Play className='play' />
                <p className='textPlay'>Instalar</p>
              </div>
              </a>

              <a href='https://apps.apple.com/br/app/growth-dieta-e-treino/id1494527360' style={{ textDecoration: 'none' }}>
                <div className='divApple'>
                  <Apple className='apple' />
                  <p className='textPlay'>Instalar</p>
                </div>
              </a>

              <a href='https://www.gsuplementos.com.br/app#pagina-appGrowth-info' style={{ textDecoration: 'none' }}><p className='saiba'>Saiba mais...</p></a>

            </div>
          </div>
        </div>
      </div>

      







    </div>


  )
}
