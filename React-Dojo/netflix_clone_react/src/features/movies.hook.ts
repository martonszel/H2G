import { useSelector } from "react-redux";
import { Movie } from "../models/Movies";

export const moviesSelector = (state: any) => {
    return state.movie.movies
        .filter((movie: Movie) =>
            movie.title
                .toLowerCase()
                .includes(state.movie.searchedMovie.toLowerCase())
        )
        .filter(
            (movie: Movie) => {
                return state.movie.filterOptions.genre === "" ||
                    movie.genre
                        .map((item) => item.toLowerCase())
                        .includes(state.movie.filterOptions.genre.toLowerCase())
            }
        )
        .sort((a: any, b: any) => {
            if (state.movie.sortOptions.sortOrder === "ascending") {
                switch (state.movie.sortOptions.sortKey) {
                    case "release_date":
                        return a.release_date - b.release_date;
                    case "rating":
                        return a.runtime - b.runtime;
                    case "title":
                        const titleA = a.title.toUpperCase();
                        const titleB = b.title.toUpperCase();
                        if (titleA < titleB) {
                            return -1;
                        }
                        if (titleA > titleB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                }
            } else {
                switch (state.movie.sortOptions.sortKey) {
                    case "release_date":
                        return b.release_date - a.release_date;
                    case "rating":
                        return b.runtime - a.runtime;
                    case "title":
                        const titleA = a.title.toUpperCase();
                        const titleB = b.title.toUpperCase();
                        if (titleA < titleB) {
                            return -1;
                        }
                        if (titleA > titleB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                }
            }
            // return a.release_date - b.release_date;
        });
};
export const useMovies = () => useSelector(moviesSelector);