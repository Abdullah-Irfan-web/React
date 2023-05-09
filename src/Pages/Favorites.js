import React from 'react'
import { useContext } from 'react'
import FavoriteContext from '../store/Favorite-Context';
import Meetuplist from '../componenets/meetup/Meetuplist';


const Favorites = () => {
  const Favctx=useContext(FavoriteContext);
  return (
   
      <section>
        <h1>My Favorites</h1>
        <Meetuplist meetups={Favctx.Favorites}/>
      </section>
  
  )
}

export default Favorites
