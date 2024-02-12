import React from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'



export const Home = () => {
  return (
    <>
      <div className='divOp'>
        <ul className='listBtn'>
          <Link to={'/alimentacao'}><button className='btn' id='a'>Alimentação</button></Link>
          <button className='btn' id='t'>Treino</button>
          <button className='btn' id='m'>Motivação</button>
          <button className='btn' id='p'>Progresso</button>
        </ul>
      </div>
    </>

  )
}
