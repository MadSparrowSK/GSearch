import React from 'react';

import classes from "./MiniPost.module.css"

const MiniPost = ({post}) => {

    let img_url = `http://localhost:5000/${post.title_slug}/${post.image}`;

    return (
        <div className={classes.miniPost}>
            <div className={classes.miniPostImage}>
                <img src={img_url} alt="mini post image"/>
            </div>
            <div className={classes.postDescription}>
                <div className={classes.title}>
                    <h3>{post.title}</h3>
                </div>
                <div className={classes.additionalInfo}>
                    <div>
                        <p>{post.author}</p>
                    </div>
                    <div>
                        <p>{post.date}</p>
                    </div>
                </div>
                <div className={classes.description}>
                    <p>{post.description}</p>
                </div>
                <div className={classes.disappear} />
            </div>
        </div>
    );
};

export default MiniPost;