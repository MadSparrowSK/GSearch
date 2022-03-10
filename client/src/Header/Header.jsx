import React from 'react';
import magnifierGlasses from '../assets/image/Header/magnifierGlass.svg'
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
           <div className={ [classes.headerContainer, 'container'].join(' ')}>
              <div className={classes.leftHeaderSide}>
                  <div className={classes.logo}>
                      <div>
                          <h2>GSearch</h2>
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
                           <li className={classes.currentPage}>News</li>
                           <li>Games</li>
                       </ul>
                   </div>
                   <div className={classes.point}>

                   </div>
               </div>
           </div>
        </header>
    );
};

export default Header;