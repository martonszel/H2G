import React from 'react'
import classes from "./SearchBar.module.css";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { searchMovie } from "../features/movie-slice";
type Props = {}

const SearchBar = (props: Props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useAppDispatch();

    const searchMovies = (title: string) => {
        dispatch(searchMovie(title))
    }

    const keyBoardPress = (title: string) => {
        dispatch(searchMovie(title))
    }

    return (
        <div className={classes.searchContainer}>
            <h1>Find your movie</h1>
            <input className={classes.searchInput} value={searchTerm} onKeyDown={(e) => keyBoardPress(e.currentTarget.value)} onChange={(e) => setSearchTerm(e.target.value)} placeholder='What do you want to Watch?' />
            <button className={classes.searchButton} onClick={() => searchMovies(searchTerm)}>Search</button>
        </div>
    )
}

export default SearchBar