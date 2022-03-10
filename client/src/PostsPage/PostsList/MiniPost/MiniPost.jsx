import React from 'react';

import classes from "./MiniPost.module.css"

const MiniPost = (post) => {

    let img_url = `http://localhost:5000/${post.post.title_slug}/${post.post.image}`;

    return (
        <div className={classes.miniPost}>
            <div className={classes.miniPostImage}>
                <img src={img_url} alt="mini post image"/>
            </div>
            <div className={classes.postDescription}>
                <div className={classes.title}>
                    <h3>{post.post.title}</h3>
                </div>
                <div className={classes.description}>
                    <p>{post.post.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MiniPost;