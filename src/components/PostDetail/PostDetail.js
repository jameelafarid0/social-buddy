import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Comments from '../Comments/Comments';


const PostDetail = () => {
   

    const useStyles = makeStyles({
        root: {
            maxWidth: 570,
            
        },
        media: {
            height: 300,
        },
    });
    const styles = {
        border: '3px solid rgb(226, 0, 94)',
        borderRadius: '20px',
        backgroundColor: 'white',
        height: '40vh',
        width: '545px',
        padding: '20px 20px 0px 20px',
        marginBottom: '40px',
        marginTop: '30px'


    }
    const styles2 ={
        textAlign:'center',
        margin:'0',
        padding:'0', 
        color:'rgb(255, 53, 87)',
        
    }
    const classes = useStyles();

 


    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            
            <React.Fragment >
                
                
                <Container className={classes.root} maxWidth="sm" className={classes.media} style={{paddingLeft:'0px'}} >
                    <Typography component="div" style={styles}  >
                        <h1 style={styles2}>Post {post.id}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>

                    </Typography>
                </Container>
                {
                 comments.map(comment => <Comments comment={comment}  ></Comments> )
                } 
               
            </React.Fragment>

        </div>
    );
};

export default PostDetail;