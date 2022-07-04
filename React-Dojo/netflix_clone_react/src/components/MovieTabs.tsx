import React from 'react'
import classes from './MovieTabs.module.css'
import { useAppDispatch } from "../store/hooks";
import { useState } from "react";
import { filterByGenre } from "../features/movie-slice";

type Props = {}

const MovieTabs = (props: Props) => {

    const [activeTab, setActive] = useState<number>(1);
    const dispatch = useAppDispatch();

    const setActiveTabAndDispatch = (currentTab: number, currentTabName: string) => {
        setActive(currentTab)
        dispatch(filterByGenre(currentTabName))
    }
    return (
        <div className={classes.movieTabs}>
            <div className={classes.tabs}>
                <button className={activeTab === 1 ? classes.active : ""} onClick={() => setActiveTabAndDispatch(1, 'All')}>All</button>
                <button className={activeTab === 2 ? classes.active : ""} onClick={() => setActiveTabAndDispatch(2, 'Documentary')}>Documentary</button>
                <button className={activeTab === 3 ? classes.active : ""} onClick={() => setActiveTabAndDispatch(3, 'Comedy')}>Comedy</button>
                <button className={activeTab === 4 ? classes.active : ""} onClick={() => setActiveTabAndDispatch(4, 'Horror')}>Horror</button>
                <button className={activeTab === 5 ? classes.active : ""} onClick={() => setActiveTabAndDispatch(5, 'Crime')}>Crime</button>
            </div>

            <div className={classes.sort}>
                <span>Sort By</span>
                <select>
                    <option value="release_date">Release Date</option>
                    <option value="rating">Rating</option>
                    <option value="runtime">Runtime</option>
                </select>
            </div>

        </div>
    )
}

export default MovieTabs