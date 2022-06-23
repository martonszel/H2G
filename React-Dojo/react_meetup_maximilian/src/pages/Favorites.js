import { useContext } from "react";
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/MeetupList';

const FavoritesPage = () => {
    const favoriteCtx = useContext(FavoritesContext)

    let content

    if (favoriteCtx.totalFavorites === 0) {
        content = <p> You dont have favorites</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage