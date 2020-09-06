import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


 const Post = (props) => {
     const {title, body, id} = props.post;
     
     const useStyles2 = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
    
    const useStyles = makeStyles({
        root: {
            maxWidth: 570,
        },
        media: {
            height: 300,
        },
    });
    const styles ={
        border:'1px solid gray',
        backgroundColor:' rgb(204, 235, 255)',
        height: '40vh',
        width:'550px',
        padding:'20px 20px 0px 20px',
        marginBottom: '30px',
        boxShadow: '7px 7px 10px 0px rgba(161,146,161,1)'
         
        
    }
    const classes = useStyles();
    const classes2 = useStyles2();
    return (
        <div>
            <React.Fragment className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.media} >
        <Typography component="div" style={styles}  >
         <h2>{title}</h2>
         <p>{body}</p>
        <Link to={`/post/${id}`} style={{textDecoration:"none"}}>
        <Button variant="contained" color="secondary" style={{height:'5vh'}} className={classes2.root}>
        See Details
      </Button>
        </Link>
        </Typography>
      </Container>
    </React.Fragment>
        
           
        
        </div>
        
    );
};

export default Post;