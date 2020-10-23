import { AccordionActions } from '@material-ui/core';
import {ADD_GAME, REMOVE_GAME, UPDATE_GAME} from '../types';

export function addGame(data, games){
    games.push(data)
    return {
        type: ADD_GAME,
        games
    }
}

export const updateGame = (data, games) => {
    const sorted = games.map(item => {
        if(item.id === data.id){
        return{
            id: data.id,
            name: data.name,
            img: data.img,
            description: data.description,
        }
    }else{
        return {
            ...item
        }
    }
    });
    return{
        type: UPDATE_GAME,
        sorted
    }
}

export const removeGame = (data, games) => {
    const removeGame = games.filter(item => item.id !== data.id);
    return{
        type: REMOVE_GAME,
        removeGame
    }
}