import React, {useEffect, useState} from 'react';

import classes from "./PostPage.module.css";

import LastPost from "./lastPost/LastPost";
import PostsSideBar from "./PostsSideBar/PostsSideBar";
import PostsList from "./PostsList/PostsList";
import Loader from "../Loader/Loader";

import axios from "axios";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        firstFetchPosts();
    }, [])

    const firstFetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/posts-api/posts', {
            params: {
                limit,
                page,
            }
        });
        const data = await response.data;
        setPosts(data);
    }

    const fetchPosts = async () => {
        setPage(page + 1);
        const response = await axios.get('http://localhost:5000/posts-api/posts', {
            params: {
                limit,
                page,
            }
        });
        const data = await response.data;
        setPosts([...posts, data]);
    }
    const findGears = async () => {
       /* const response = await axios.get('http://localhost:5000/posts-api/posts/gears')
        const data = await response.data;
        setPosts(data);*/
    }
    const findGames = async () => {
        /*const response = await axios.get('http://localhost:5000/posts-api/posts/game')
        const data = await response.data;
        setPosts(data);*/
    }

    const findMemes = async () => {
       /* const response = await axios.get("http://localhost:5000/posts-api/posts/memes")
        const data = await response.data;
        setPosts(data);*/
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
                    posts
                        ? posts.length ? <PostsList posts={posts}/> : <h1>Empty</h1>
                        : <Loader />
                }
            </div>
            <button onClick={fetchPosts}>Download more</button>
        </div>
    );
};

export default PostsPage;