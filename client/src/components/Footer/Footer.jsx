import React from 'react';

import BeIcon from "../../assets/image/icons/be.svg"
import gHubIcon from "../../assets/image/icons/github-icon.svg"

import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.upper}>
                    <div className={classes.title}>
                        <h2>GSearch</h2>
                    </div>
                    <div className={classes.nav}>
                        <ul>
                            <li>News</li>
                            <li>Games</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.middle}>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.additionalInfo}>
                        <div>
                            <p>2022</p>
                        </div>
                    </div>
                    <div className={classes.infoAboutCreators}>
                        <div className={classes.creators}>
                            <div className={classes.creator}>
                                <div className={classes.work}>
                                    <h3>Design:</h3>
                                </div>
                                <div className={classes.creatorLinks}>
                                    <div className={classes.link}>
                                        <a href="#">
                                            <img src={BeIcon} alt="icons"/>
                                        </a>
                                    </div>
                                    <div className={classes.link}>
                                        <a href="#">
                                            <img src={BeIcon} alt="icons"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.creator}>
                                <div className={classes.work}>
                                    <h3>Developers:</h3>
                                </div>
                                <div className={classes.creatorLinks}>
                                    <div className={classes.link}>
                                        <a href="#">
                                            <img src={gHubIcon} alt="icons"/>
                                        </a>
                                    </div>
                                    <div className={classes.link}>
                                        <a href="#">
                                            <img src={gHubIcon} alt="icons"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;