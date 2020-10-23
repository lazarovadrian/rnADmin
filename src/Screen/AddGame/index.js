import React from 'react'

import {Header} from '../../Components/Header'
import {Nav} from '../../Components/Nav'
import AddGameForm from '../../Components/AddGameForm/index.js'

const TITLE = 'Добавление новой игры'

export const AddGame = () =>{
    return(
    
        <div className="Home">
            <Header
                title={TITLE}
            />
            
            <div className="Home-Wrapper">

                <Nav />

                <main className="Home-Body">
                    <AddGameForm />
                </main>

            </div>

        </div>

    )
}