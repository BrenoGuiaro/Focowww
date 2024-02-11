import React from 'react'
import '../CSS/Buttons.css'
import { Link } from 'react-router-dom'

export const Buttons = () => {
    return (
        <>
            <div className='divBtn'>
                <ul className='listBtn'>
                    <Link to={'/alimentacao'}><button className='btn'>A</button></Link>
                    <Link to={'/treino'}><button className='btn'>T</button></Link>
                    <Link to={'/meta'}><button className='btn'>M</button></Link>
                    <Link to={'/progresso'}><button className='btn'>P</button></Link>
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
