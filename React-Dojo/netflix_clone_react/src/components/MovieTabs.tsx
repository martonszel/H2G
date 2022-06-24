import React from 'react'
import classes from './MovieTabs.module.css'
import { useState } from "react";

type Props = {}

const MovieTabs = (props: Props) => {

    const [activeTab, setActive] = useState<number>(1);

    const setActiveTab = (currentTab: number) => {
        setActive(currentTab)
    }
    return (
        <div className={classes.movieTabs}>
            <div className={classes.tabs}>
                <button className={activeTab === 1 ? classes.active : ""} onClick={() => setActiveTab(1)}>All</button>
                <button className={activeTab === 2 ? classes.active : ""} onClick={() => setActiveTab(2)}>Documentary</button>
                <button className={activeTab === 3 ? classes.active : ""} onClick={() => setActiveTab(3)}>Comedy</button>
                <button className={activeTab === 4 ? classes.active : ""} onClick={() => setActiveTab(4)}>Horror</button>
                <button className={activeTab === 5 ? classes.active : ""} onClick={() => setActiveTab(5)}>Crime</button>
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