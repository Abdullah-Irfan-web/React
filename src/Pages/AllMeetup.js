import React from 'react'
import Meetuplist from '../componenets/meetup/Meetuplist';
import { useState,useEffect } from 'react';

const AllMeetup = () => {
  const[loading,setloading]=useState(true);
  const[loadeddata,setloadeddata]=useState([]);

  useEffect(()=>{
    setloading(true);
      fetch('https://firts-react-96dca-default-rtdb.firebaseio.com/meetup.json')
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    const meetups=[];
    for(const key in data){

      const meetup={
        id:key,
        ...data[key]
      }
      meetups.push(meetup);
    }
    setloading(false);
    setloadeddata(meetups);
  })
  },[])
  
  if(loading){
    return (
    <section><p>Loading....</p></section>
    );
  }

  return (
    <div>
     <Meetuplist meetups={loadeddata}/>
    </div>
  )
}

export default AllMeetup
