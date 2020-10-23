import React from 'react';

import {NavLink} from "react-router-dom"

import './Nav.css';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';

export const Nav = () =>{
    return(
      <div className="Main-Nav">

        <NavLink to="/">
            <ListItem button >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Главная" />
            </ListItem>
        </NavLink>

        <NavLink to="/gamelist" activeClassName="selected">
          <ListItem button to="/gamelist">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Список игр" />
          </ListItem>
        </NavLink>

        <NavLink to="/profile" activeClassName="selected">
          <ListItem button >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Профиль" />
          </ListItem>
        </NavLink>
      </div>

    )
}