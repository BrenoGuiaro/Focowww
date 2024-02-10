import React from 'react'
import '../CSS/NavBar.css'
import { GiMuscleUp as Logo } from "react-icons/gi";

export const NavBar = () => {
    return (
        <>

            <div className='fundoBar'>
                <Logo className='logo' />
                <h1 className='title'>Foco</h1>
            </div>
        </>
    )
}
