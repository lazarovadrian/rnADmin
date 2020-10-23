import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

// const hendler = () => {
//   props.addGame = () => {
//     return 'TEST';
//   }
// }

const AddGameForm = () =>{
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Название" />
            <TextField id="standard-basic" label="Описание" />
            {/* <input type="submit" value="Сохранить" onClick={hendler()}/> */}
        </form>
    )
}

const mapStateToProps = state =>{
  return{

  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addGame: (games) => dispatch(addGame(games))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddGameForm)