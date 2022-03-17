import React from 'react';
import classes from "./PostsList.module.css";
import MiniPost from "./MiniPost/MiniPost";
import Pagination from "../../Pagination/Pagination";


const PostsList = ({posts, changePage,arrayPages, page}) => {

    if(!posts) {
        return (
            <div className={classes.postsList}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={classes.postsList}>
            {
                    posts.map(post =>
                        <MiniPost post={post} key={post._id}/>
                    )
            }

            <Pagination changePage={changePage} arrayPages={arrayPages} page={page}/>
        </div>
    );
};

export default PostsList;