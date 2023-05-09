import React from 'react'
import Card from '../ui/Card';
import classes from './Addmeetupform.module.css'
import {useRef} from 'react'
const Addmeetupform = (props) => {
const inputtitle=useRef();
const inputimage=useRef();
const inputaddress=useRef();
const inputdescription=useRef();
    function submithandler(event){
        event.preventDefault();
        const titleval=inputtitle.current.value;
        const imageval=inputimage.current.value;
        const addressval=inputaddress.current.value;
        const descriptionval=inputdescription.current.value;
        const meetupData={
            title:titleval,
            image:imageval,
            address:addressval,
            description:descriptionval,

        };
       props.onAddmeetup(meetupData);

    }
  return (
   <Card>
    <form className={classes.form} onSubmit={submithandler}>
        <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type='text' required id='title' ref={inputtitle}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='image'>Image</label>
            <input type='url' required id='image' ref={inputimage}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type='text' required id='address' ref={inputaddress}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>Description</label>
           <textarea id='description' required rows='5' ref={inputdescription}/>
        </div>
        <div className={classes.actions}>
            <button >Add Meetup</button>
        </div>
    </form>
   </Card>
  )
}

export default Addmeetupform
