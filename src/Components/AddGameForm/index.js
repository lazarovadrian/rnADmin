import React, {useState, useEffect, useIn} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import {connect} from 'react-redux';
import {addGame} from '../../Redux/actions/mainAction';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      dispay: 'flex',
      flexDicoration: 'column'
    },
  },
}));

// const sendGame = () => {
//   props.addGame = () => {
//     console.log("gjtikfgj")
//   }
// }

const AddGameForm = props  =>{

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const addToGame = () => {
      props.addGame({
        name,
        description
      }, [...props.games])
    }

    const classes = useStyles();
    return(
        <div className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Название" value={name} onChange={(name)=>setName(name.target.value)}/>
            <TextField id="standard-basic" label="Описание" value={description} onChange={(description)=>setDescription(description.target.value)}/>
            <Button onClick={addToGame}>Отправить</Button>
        </div>
    )
}

function mapStateToProps(state) {
  return{
    games: state.mainReducer.games
  }
}

function mapDispatchToProps(dispatch) {
  return{
    addGame: (data, games) => dispatch(addGame(data, games))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGameForm)