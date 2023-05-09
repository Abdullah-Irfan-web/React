import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

import classes from './Navigation.module.css';
import FavoriteContext from '../../store/Favorite-Context';

const Navigation = () => {
    const Favctx=useContext(FavoriteContext);
  return (
   <header className={classes.header}>
    <div className={classes.logo}>
        React Meetup
    </div>
    <nav>
        <ul>
            <li>
                <Link to='/'>All MeetUps</Link>
            </li>
            <li>
                <Link to='/favorites'>Favorites MeetUps{Favctx.FavoriteCount===0?'':'('+Favctx.FavoriteCount +')'}</Link>
            </li>
            <li>
                <Link to='/add'>Add MeetUps</Link>
            </li>
        </ul>
    </nav>
   </header>
  )
}

export default Navigation
