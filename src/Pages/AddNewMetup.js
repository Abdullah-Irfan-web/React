import React from 'react'
import Addmeetupform from '../componenets/meetup/Addmeetupform'
import {useHistory} from 'react-router-dom'
const AddNewMetup = () => {
  const history=useHistory();
  function addhandler(meetupdata){
      fetch('https://firts-react-96dca-default-rtdb.firebaseio.com/meetup.json',
      {
        method:'POST',
        body:JSON.stringify(meetupdata),
       headers:{
        'Content-type':'application/json'
       }
      })
      .then(()=>{
        history.replace('/');
      });
  }
  return (
   < Addmeetupform onAddmeetup={addhandler}/>
  )
}

export default AddNewMetup
