import {ADD_GAME, REMOVE_GAME, UPDATE_GAME} from '../../Redux/types.js';

const initialState = {
    games: []
};

export default function mainReducer(state = initialState, action){
    switch (action.type) {
        case ADD_GAME:
            return {
                ...state,
                games: action.games
            };
        case REMOVE_GAME:
            return{
                ...state,
                games: action.removeGame
            };
        case UPDATE_GAME:
            return{
                ...state,
                games: action.sorted
            }
        default: return state
    }
} 
