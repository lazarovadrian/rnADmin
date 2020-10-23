import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {Home} from '../Screen/Home'
import GameList from '../Screen/GameList'
import {Profile} from '../Screen/Profile'
import {AddGame} from '../Screen/AddGame'

export const Router = () =>{
    return(

        <Switch>
            <Route path={'/home'} exact>
                <Home />
            </Route>

            <Route path={'/gamelist'}>
                <GameList />
            </Route>

            <Route path={'/profile'}>
                <Profile />
            </Route>

            <Route path={'/addgame'}>
                <AddGame />
            </Route>
            <Redirect from='/' to='/home'/>
        </Switch>

    )
}