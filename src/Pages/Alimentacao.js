import React from 'react'
import '../CSS/Alimentacao.css'
import { IoMdDownload  as Download} from "react-icons/io";
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
            <p className='inst'><Download className='dow'/>Instalar</p>
            <div className='info'>
              <div className='divPlay'>
                <Play className='play'/>
                <p className='textPlay'>Instalar</p>
              </div>
              
                <div className='divApple'>
                  <Apple className='apple'/>
                  <p className='textPlay'>Instalar</p>
                </div>

                <p className='saiba'>Saiba mais...</p>
              
            </div>
          </div>
        </div>
      </div>



    </div>

  )
}
