import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

function Comments({id}) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=949e143f769d41b678bb117fb5ce5494&language=en-US&page=1`)
            .then(res => res.json())
            .then(comment => setComments(comment.results))
    }, [id])
    return (
        <div style={{}}>
            <h2>Comments</h2>
            {
                comments.length && comments.map(comment => <Comment key={comments.id} comment={comment}/>) || 'Комментариев НЕТ!'
            }
        </div>
    );
}

export default Comments;