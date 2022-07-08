import React from 'react'
import classes from './Modals.module.css'
import Multiselect from 'multiselect-react-dropdown';
import { useState } from "react";
import { useAddMoviesMutation, useUpdateMoviesMutation } from '../../features/movie-api-slice';
import EmptyButton from '../EmptyButton';
import FullButton from '../FullButton';
import SuccessModal from './SuccessModal';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type Props = {
    close: () => void;
    name: string;
    updatable: boolean
}

const FormModal: React.FC<Props> = ({ close, name, updatable }) => {

    const oneMovie = useAppSelector((state) => state.movie.oneMovie);

    const [title, setTitle] = useState<string>(oneMovie.title || '');
    const [thumbnail, setURL] = useState<string>(oneMovie.thumbnail || '');
    const [genre, setGenre] = useState<string[]>(oneMovie.genre || [])
    const [release, setRelease] = useState<string>('');
    const [rating, setRating] = useState<number>(oneMovie.rating || 0);
    const [runtime, setRuntime] = useState<number>();
    const [overview, setOverview] = useState<string>(oneMovie.overview || '');
    const [isSubmitted, setSubmitted] = useState<boolean>(false);

    const [addMovie, addResult] = useAddMoviesMutation();
    const [updateMovie, updateResult] = useUpdateMoviesMutation();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const release_date = release.slice(0, 4)

        const updatedValues = {
            id: oneMovie.id, title, thumbnail, genre, release_date, rating, runtime, overview
        }

        const movie = {
            id: Math.random(), title, thumbnail, genre, release_date, rating, runtime, overview
        }
        setSubmitted(true)

        updatable ? await updateMovie(updatedValues) : await addMovie(movie);

    }

    const handleReset = (e: any) => {
        e.preventDefault();
        setTitle('')
        setURL('')
        setGenre([])
        setRelease('')
        setRating(0)
        setRuntime(0)
        setOverview('')
        setSubmitted(false)
    }

    return (

        isSubmitted ? <SuccessModal close={close} /> :
            <React.Fragment>
                <div>
                    <div className={classes.modalClose} onClick={() => close()} >X</div>
                    <div className={classes.modalHeader}>
                        <h4 className={classes.modalTitle}>{name}</h4>
                    </div>
                    <div className={classes.modalBody}>
                        <form onSubmit={(e) => handleSubmit(e)} >
                            <div className={classes.flexContainer}>
                                <div className={classes.flexLeft} >
                                    <div>
                                        <label htmlFor='title'>title</label>
                                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='url'>movie url</label>
                                        <input type="text" id="url" value={thumbnail} onChange={(e) => setURL(e.currentTarget.value)} placeholder='https://' />
                                    </div>
                                    <div className={classes.multiselect}>
                                        <label htmlFor='url' >genre</label>
                                        <Multiselect
                                            isObject={false}
                                            options={['Crime', 'Documentary', 'Horror', 'Comedy']} // Options to display in the dropdown

                                            onSelect={(e) => {

                                                setGenre(e)

                                            }} // Function will trigger on select event
                                            onRemove={(e) => {

                                                console.log(e);

                                            }} // Function will trigger on remove event
                                            style={{
                                                chips: {
                                                    background: '#424242',
                                                    margin: '0',
                                                    padding: '0 0.5em'
                                                },
                                                multiselectContainer: {
                                                    color: '#f65261',

                                                },
                                                searchBox: {
                                                    border: 'none',
                                                    background: '#424242',
                                                    padding: 'none',
                                                    height: '70px',
                                                    width: '78%'


                                                },
                                                optionListContainer: { // To change css for option container 
                                                    width: '50% !important'
                                                },
                                                optionContainer: { // To change css for option container 
                                                    background: '#424242 !important',
                                                    color: '#f65261',
                                                },
                                                option: { // To change css for dropdown options
                                                    background: '#424242',
                                                },
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={classes.flexRight} >
                                    <div>
                                        <label htmlFor='release'>release date</label>
                                        <input type="date" id="release" value={release} onChange={(e) => setRelease(e.currentTarget.value)} className={classes.release} />
                                    </div>
                                    <div>
                                        <label htmlFor='rating'>rating</label>
                                        <input type="number" id="rating" value={rating} onChange={(e) => setRating(parseInt(e.currentTarget.value))} placeholder='7.8' />
                                    </div>
                                    <div>
                                        <label htmlFor='runtime'>runtime</label>
                                        <input type="number" id="runtime" value={runtime} onChange={(e) => setRuntime(parseInt(e.currentTarget.value))} placeholder='minutes' />
                                    </div>
                                </div>

                            </div>

                            <div>
                                <label htmlFor='overview'>overview</label>
                                <textarea id="overview" value={overview} onChange={(e) => setOverview(e.currentTarget.value)} />
                            </div>

                            <div className={classes.modalFooter}>
                                <EmptyButton name='reset' onClick={(e: any) => handleReset(e)} />
                                <FullButton name='submit' />
                            </div>

                        </form>
                    </div>

                </div>

            </React.Fragment >
    )
}

export default FormModal