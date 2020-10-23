import React, {useState, useEffect} from 'react';

//MATERIAL
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

//CSS
import './GameList.css'

import {Header} from '../../Components/Header'
import {Nav} from '../../Components/Nav'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateGame,removeGame} from '../../Redux/actions/mainAction'


const TITLE = 'Список игр'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    }
  });
  
const GameList = props =>{
    const classes = useStyles();

    useEffect(() => {
       console.log(props.games)
    })


    return (
        <div className="Home">
            <Header
                title={TITLE}
            />
        <div className="Home-Wrapper">

            <Nav />

            <main className="Home-Body">
            <Link size="small" color="primary" to="/AddGame">Add Game</Link>

                <Card className={classes.root} id={Date.now.toString()}>
                    <CardActionArea>

                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        {props.games.map(game => {
                            return (
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{game.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{game.description}</Typography>
                                </CardContent> 
                            )
                        })}
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">Remove</Button>
                        <Button size="small" color="primary">Udpate</Button>
                    </CardActions>

                </Card>
            </main>

        </div>

    </div>
    );
}

function mapStateToProps(state) {
    return {
        games: state.mainReducer.games
    }
}
export default connect(mapStateToProps)(GameList);