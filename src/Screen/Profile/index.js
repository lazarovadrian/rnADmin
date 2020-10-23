import React from 'react';

import {Header} from '../../Components/Header'
import {Nav} from '../../Components/Nav'

const TITLE = 'Профиль'

export const Profile = () =>{
    return(
        <div>
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