import React, {useEffect, useState} from 'react';

import classes from "./PostPage.module.css";

import LastPost from "./lastPost/LastPost";
import PostsSideBar from "./PostsSideBar/PostsSideBar";
import PostsList from "./PostsList/PostsList";
import Loader from "../Loader/Loader";

import axios from "axios";

const PostsPage = () => {

    let eventSource = null;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firstFetchPosts();
    }, [])

    const firstFetchPosts = async () => {
        const test = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10&page=1');
        const response = await axios.get('http://localhost:5000/posts-api/posts', {
            params: {
                _limit: 10
            }
        });
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

    const findMemes = async () => {
        const response = await axios.get("http://localhost:5000/posts-api/posts/memes")
        const data = await response.data;
        setPosts(data);
    }


    const hotNews = async () => {
        /*setPosts([]);
        eventSource = new EventSource("http://localhost:5000/posts-api/hot-posts");
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setPosts(prev => [data, ...prev]);
        }*/
    }
    const unsubscribeHotPost = () => {
        //eventSource?.close();
    }

    return (
        <div className={"container"}>
            <div className={classes.lastNews}>
                <LastPost/>
                <LastPost/>
            </div>
            <div className={classes.posts}>
                <PostsSideBar findGears={findGears} findGames={findGames} findMemes={findMemes} hotNews={hotNews} unsubscribeHotPost={unsubscribeHotPost}/>
                {
                    posts.length
                        ? <PostsList posts={posts}/>
                        : <Loader />
                }
            </div>
        </div>
    );
};

export default PostsPage;