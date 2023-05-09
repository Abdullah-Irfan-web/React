import { createContext,useState } from "react";


const FavoriteContext=createContext({
    Favorites:[],
    FavoriteCount:0,
    addFvrt:(FavMeetup)=>{},
    removeFvrt:(meetupId)=>{},
    isFvrt:(meetupId)=>{}

});

export function FavoriteContextProvider(props){
    const[userFavorite,setUserFavorite]=useState([]);
   
    function addFavorite(FavMeetup){
        setUserFavorite((prev)=>{
            return prev.concat(FavMeetup);
        })


    }
    function removeFavorite(meetupId){
        setUserFavorite(prev=>{
            return prev.filter(meetup=>meetup.id!==meetupId)
        });
    }
    function isFavorite(meetupId){
        return userFavorite.some(meetup=> meetup.id===meetupId)

    }
    const context={
        Favorites:userFavorite,
        FavoriteCount:userFavorite.length,
        addFvrt:addFavorite,
        removeFvrt:removeFavorite,
        isFvrt:isFavorite
    }
return(
    <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
)

}
export default FavoriteContext;