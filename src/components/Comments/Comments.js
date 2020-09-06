import React from 'react';
import './Comments.css'
import Avatar from '@material-ui/core/Avatar';




const Comments = (props) => {
    

    const { name, email, body } = props.comment;
    return (
        <div className="comment-box">
            
                <span className="profile">
                    <Avatar alt="remy sharp" src="https://images.unsplash.com/photo-1598936362525-cb68268a998c?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9auto=formatfit=cropw=1567q=80"  />
                    <h2 >{name}</h2>
                </span>
                
                <p>email:{email}</p>
                <h3>body:{body}</h3>
 
        </div>
    );
};

export default Comments;