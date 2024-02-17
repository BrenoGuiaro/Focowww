import React from 'react'
import '../CSS/Alimentacao.css'
import { IoMdDownload as Download } from "react-icons/io";
import { FaGooglePlay as Play } from "react-icons/fa";
import { FaApple as Apple } from "react-icons/fa";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GrLinkNext as Next } from "react-icons/gr";

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

      <Swiper pagination={true} slidesPerView={1} >
        <SwiperSlide>
          <div className='tm'>
            <div className='div' id='div1'>
              <div className='boxText'>
                <h1 className='TT'>Como usar</h1>
                <p className='textG' style={{ fontSize: '23px', paddingTop: '30px' }}>Primeiro de tudo coloque seus dados e veja suas metas de Carboidrato, Proteina, e Gordura, é com base nisso q vc deve colocar suas refeiçoes diaria, porem antes de entender um pouco mais sobre isso , deslize para o lado e veja seu proximo passo </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '190px', alignItems: 'center', paddingTop: '40px', paddingLeft: '20px' }}>
                  <p style={{ fontSize: '18px', color: 'grey' }}>Deslize para o lado</p>
                  <Next style={{ color: 'grey', fontSize: '20px' }} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tm'>
            <div className='div' id='div3'>
              <div className='boxText'>
                <h1 className='TT'>Horários </h1>
                <p className='textG' style={{ fontSize: '20px', paddingTop: '20px'}}>Primeiro eu sugiro que você defina os seus horários de refeições, para assim ter um melhor controle do que é ingerido durante o dia, logo após colocar todos esses horários no aplicativo, da seguinte maneira: </p>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/7pAK60ckbRY?si=xTsm0yzhMIncDM_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ paddingTop: '20px', paddingLeft: '15px' }}></iframe>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='tm' style={{ height: '62vh' }}>
            <div className='div' id='div2' >
              <div className='boxText'>
                <h1 className='TT' style={{ paddingLeft: '20px' }}>Mão na massa</h1>
                <p className='textG' style={{ paddingTop: '20px', width: '330px' }}>Depois de definir e colocar seus horários no aplicativo, agora chegou a hora de colocar a mão na massa, precisamos agora aprender como colocar os alimentos ingeridos por você em cada horário, veja o vídeo logo abaixo para saber como colocar seus alimentos nos horários respectivos: </p>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/7pAK60ckbRY?si=xTsm0yzhMIncDM_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ paddingTop: '10px', paddingLeft: '15px' }}></iframe>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tm'>
            <div className='div' id='div3'>
              <div className='boxText'>
                <h1 className='TT' style={{fontSize: '25px', paddingLeft: '15px'}}>Como Saber se estou certo ?</h1>
                <p className='textG' style={{ fontSize: '20px', paddingTop: '10px'}}>Bom para saber isso é muito simples, lembra das metas de carboidratos, proteínas e gorduras? então, depois de colocar os alimentos a quantidade de cada um vai mudar dependendo do alimento, como mostra logo abaixo: </p>
                <div style={{ width:'280px', height: '180px', border: '2px solid red', marginTop: '10px'}}></div>
              </div>
            </div>
          </div>
        </SwiperSlide>



      </Swiper>









    </div>


  )
}
