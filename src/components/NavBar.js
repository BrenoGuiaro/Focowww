import React from 'react'
import '../CSS/NavBar.css'
import { GiMuscleUp as Logo } from "react-icons/gi";


export const NavBar = () => {

    // function ney() {
    //     let total = document.querySelectorAll('.menu')
    //     for (var activeBar = 0;
    //         activeBar < total.length;
    //         activeBar++) {
    //         total[activeBar].classList.toggle('active')
    //     }
    // }

    function teste() {
        const div = document.querySelector('.divOp')
        const text = document.querySelector('#a')
        const text2 = document.querySelector('#t')
        const text3 = document.querySelector('#m')
        const text4 = document.querySelector('#p')


        if (div.style.background === 'none') {
            div.style.background = '#009edf'
            text.style.opacity = 1
            text2.style.opacity = 1
            text3.style.opacity = 1
            text4.style.opacity = 1
            // ney()


        } else {
            div.style.background = 'none'
            text.style.opacity = 0
            text2.style.opacity = 0
            text3.style.opacity = 0
            text4.style.opacity = 0
            // ney()


        }


    }




    return (

        <>

            <div className='fundoBar'>
                <Logo className='logo' />
                <h1 className='title'>Foco</h1>

                <button className='opn' onClick={teste}>
                    {/* <div className='menu' >
                        <div className='b1'></div>
                        <div className='b2'></div>
                        <div className='b3'></div>
                    </div> */}

                </button>

            </div>
        </>
    )
}
