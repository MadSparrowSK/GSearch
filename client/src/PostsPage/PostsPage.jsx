import React, {useEffect, useState} from 'react';
import classes from "./PostPage.module.css";

import LastPost from "./lastPost/LastPost";
import PostsSideBar from "./PostsSideBar/PostsSideBar";
import PostsList from "./PostsList/PostsList";
import axios from "axios";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firstFetchPosts();
    }, [])

    const firstFetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/posts-api/posts');
        const data = await response.data;
        setPosts(data);
    }

    const findGears = async () => {
        const response = await axios.get('http://localhost:5000/posts-api/posts/gears')
        const data = await response.data;
        setPosts(data);
    }
    const findGames = async () => {
        const response = await axios.get('http://localhost:5000/posts-api/posts/game')
        const data = await response.data;
        setPosts(data);
    }

    const resetPosts = () => {
        setPosts([])
    }

    return (
        <div className={"container"}>
            <div className={classes.lastNews}>
                <LastPost/>
                <LastPost/>
            </div>
            <div className={classes.posts}>
                <PostsSideBar findGears={findGears} findGames={findGames}/>
                <PostsList posts={posts}/>
            </div>
        </div>
    );
};

export default PostsPage;