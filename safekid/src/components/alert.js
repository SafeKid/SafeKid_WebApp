import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
//import CheckCircleIcon from '@material-ui/icons/CheckCircle';
//import ErrorIcon from '@material-ui/icons/Error';
//import InfoIcon from   '@material-ui/icons/Info';
//import CloseIcon from   '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
//import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarContent, Icon, IconButton } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    success:{
        backgroundColor:green[600],
    },
    error:{
        backgroundColor:theme.palette.error.dark,
    },
    info:{
        backgroundColor:theme.palette.primary.main,
    },
    warning:{
        backgroundColor:amber[700],
    },
    icon:{
        fontSize:20,
    },
    iconVariant:{
        opacity:'0.9'
    },
    message:{
        display:'flex',
        alignItems:'center',
    }
    
   /* root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },*/
   // },
  }));

const Alert =({type,message,autoclose}) =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(false);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return(
        <Snackbar 
            anchorOrigin=
            {{
                vertical:'bottom',
                horizontal:'center',
            }}

        open={open} autoHideDuration={autoclose} onClose={handleClose}>

            <SnackbarContent
                className={clsx(classes[type])}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={clsx (classes.icon,classes.iconVariant)}>
                            {type==='success' ? 'check_circle' : type}
                        </Icon>
                        {message}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                        <Icon className={classes.icon}>close</Icon>
                    </IconButton>
                ]}
                />
        </Snackbar>
       
    );
}

export default Alert;

