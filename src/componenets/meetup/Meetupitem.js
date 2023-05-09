import React from 'react'
import classes from './Meetupitem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react'
import FavoriteContext from '../../store/Favorite-Context'
const Meetupitem = (props) => {
  const Favctx=useContext(FavoriteContext);
  const itemisfav=Favctx.isFvrt(props.id);
  function togglefavbtn(){
    console.log(Favctx)
    if(itemisfav){
      Favctx.removeFvrt(props.id)
    }
    else{
      Favctx.addFvrt({
        id:props.id,
        image:props.image,
        title:props.title,
        address:props.address,
        description:props.description

      });
    }
  }
  return (
<li className={classes.item}>
  <Card>
    <div className={classes.image}>
        <img src={props.image} alt=''/>
    </div>
    <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
        <button onClick={togglefavbtn}>{itemisfav?'Remove from Favorites':'To Favorite'}</button>
    </div>
    </Card>
</li>
  )
}

export default Meetupitem
