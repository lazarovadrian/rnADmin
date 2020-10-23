import React from 'react'
import './Home.css'

// import map from 'underscore'

import {Header} from '../../Components/Header'
import {Nav} from '../../Components/Nav'

const TITLE = "Home"

export const Home = () =>{
    return(
        <div className="Home">
            <Header
                title={TITLE}
            />
            
            <div className="Home-Wrapper">

                <Nav />

                <main className="Home-Body">

                </main>

            </div>

        </div>
    )
}
