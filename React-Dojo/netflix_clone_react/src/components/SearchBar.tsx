import React from 'react'
import classes from "./SearchBar.module.css";
type Props = {}

const SearchBar = (props: Props) => {
    return (
        <div className={classes.searchContainer}>
            <h1>Find your movie</h1>
            <input className={classes.searchInput} placeholder='What do you want to Watch?' />
            <button className={classes.searchButton}>Search</button>
        </div>
    )
}

export default SearchBar