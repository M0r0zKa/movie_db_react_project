import React from 'react';

function Comment({comment}) {
    console.log(comment)

    return (
        <div style={{marginTop:'20px', padding:'10px'}}>
            <div>
                <h3>User Name : {comment.author_details.username}</h3>
                <h4>User rating : {comment.author_details.rating}</h4>
                <hr/>
            </div>
            <div>
             <p style={{textAlign:'center'}}>{comment.content}</p>
            </div>
        </div>
    );
}

export default Comment;