import React from 'react'
import '../CSS/Home.css'

export const Home = () => {
  return (
    <>
      <div className='divBtn'>
        <ul className='listBtn'>
          <button className='btn'>A</button>
          <button className='btn'>T</button>
          <button className='btn'>M</button>
          <button className='btn'>P</button>
        </ul>
        <ul className='divP'>
          <p className='p1'>Alimentação</p>
          <p className='p'>Treino</p>
          <p className='p2'>Metas</p>
          <p className='p'>Progresso</p>
        </ul>
      </div>
    </>

  )
}
