import React, {useEffect, useState} from 'react';

import classes from "./PostPage.module.css";

import LastPost from "./lastPost/LastPost";
import PostsSideBar from "./PostsSideBar/PostsSideBar";
import PostsList from "./PostsList/PostsList";
import Loader from "../Loader/Loader";

import {PostService} from "../../API/PostService";
import {getPagesArray, getPagesCount} from "../../utils/pages";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    const arrayPages = getPagesArray(totalPages)

    useEffect( async () => {
        await fetchPosts();
    }, [page])

    const fetchPosts = async () => {
        const response = await PostService.getAllPosts(limit, page)
        const data = await response.data;
        const totalCount = getPagesCount(response.headers['x-total-count'], limit)
        setTotalPages(totalCount)
        setPosts(data);
    }

    const changePage = async (currentPage) => {
        setPage(currentPage);
    }

    return (
        <div className={"container"}>
            <div className={classes.lastNews}>
                <LastPost/>
                <LastPost/>
            </div>
            <div className={classes.posts}>
                <PostsSideBar />
                {
                    posts.length
                        ? <PostsList posts={posts} changePage={changePage} arrayPages={arrayPages} page={page}/>
                        : <Loader />
                }
            </div>
        </div>
    );
};

export default PostsPage;