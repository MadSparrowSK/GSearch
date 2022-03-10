import React from 'react';
import classes from "./PostsList.module.css";
import MiniPost from "./MiniPost/MiniPost";


const PostsList = (posts) => {

    if(!posts['posts']) {
        return (
            <div className={classes.postsList}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={classes.postsList}>
            {
                    posts.posts.map(post =>
                        <MiniPost post={post} key={post._id}/>
                    )
            }
            {/*<MiniPost />
            <MiniPost />
            <MiniPost />
            <MiniPost />*/}
        </div>
    );
};

export default PostsList;