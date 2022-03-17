import React, {useEffect, useState} from 'react';
import magnifierGlasses from '../../assets/image/Header/magnifierGlass.svg'
import classes from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {

   let dotState = 'posts';

   const setDotState = (state) => {
       dotState = state;
   }

    useEffect(() => {
        changeDotPos()
    }, [])

    const changeDotPos = () => {
        const dot = document.querySelector('#point');
        const news = document.querySelector('#news');
        const games = document.querySelector('#games');
        if(dotState == 'posts') {
            dot.style.left = news.offsetLeft + news.clientWidth / 2 + 'px';
            news.classList.add('currentPage');
            games.classList.remove('currentPage')
        }
        if(dotState == 'games') {
            dot.style.left = games.offsetLeft + games.clientWidth / 2 + 'px';
            news.classList.remove('currentPage')
            games.classList.add('currentPage')
        }
    }

    return (
        <header className={classes.header}>
           <div className={[classes.headerContainer, 'container'].join(' ')}>
              <div className={classes.leftHeaderSide}>
                  <div className={classes.logo}>
                      <div>
                          <h2 onClick={e => { setDotState('posts'); changeDotPos()}}>
                              <Link to='/posts'>GSearch</Link>
                          </h2>
                      </div>
                  </div>
                  <div className={classes.searchBar}>
                      <div>
                          <input type='text' placeholder='Search'/>
                      </div>
                      <div className={classes.searchBarImage}>
                          <img src={magnifierGlasses} alt="magnifierGlass"/>
                      </div>
                  </div>
              </div>
               <div className={classes.pages}>
                   <div className={classes.navBar}>
                       <ul>
                           <li id='news' onClick={(e) => { setDotState('posts'); changeDotPos() }}>
                               <Link to='posts'>
                                   News
                               </Link>
                           </li>
                           <li id='games' onClick={(e) => { setDotState('games'); changeDotPos() }}>
                               <Link to='/games'>Games</Link>
                           </li>
                       </ul>
                   </div>
                   <div className={classes.point} id='point'>
                   </div>
               </div>
           </div>
        </header>
    );
};

export default Header;