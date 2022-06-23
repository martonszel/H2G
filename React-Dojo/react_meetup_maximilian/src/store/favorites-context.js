import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { },
})


export const FavoritesContextProvider = (props) => {

    const [userFavorites, setuserFavorites] = useState([])

    const addFavoriteHandler = (favoriteMeetup) => {
        setuserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    const removeFavoriteHandler = (meetupId) => {
        setuserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => {
                return meetup.id !== meetupId
            })
        })
    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some((meetup) => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext