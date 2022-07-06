import React from 'react'
import ReactDOM from 'react-dom';
import classes from './MovieModal.module.css'
import Multiselect from 'multiselect-react-dropdown';
import { useState } from "react";
import logo from '../assets/success.png'
import { useAddMoviesMutation } from '../features/movie-api-slice';

type Props = {
    show: boolean
    hide: () => void;

}

const AddMovieModal: React.FC<Props> = ({ show, hide }) => {

    const [title, setTitle] = useState<string>('');
    const [thumbnail, setURL] = useState<string>('');
    const [genre, setGenre] = useState<string[]>([])
    const [release, setRelease] = useState<string>('');
    const [rating, setRating] = useState<number>();
    const [runtime, setRuntime] = useState<number>();
    const [overview, setOverview] = useState<string>('');
    const [isSubmitted, setSubmitted] = useState<boolean>(false);


    const [addMovie, result] = useAddMoviesMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const release_date = release.slice(0, 4)

        const movie = {
            id: Math.random(), title, thumbnail, genre, release_date, rating, runtime, overview
        }
        setSubmitted(true)
        await addMovie(movie);

    }

    if (!show) {
        return null
    }


    return show ? ReactDOM.createPortal(

        isSubmitted ?
            <div className={classes.modalContainer}>
                <div className={classes.modal} >
                    <div className={classes.modalContent} >
                        <div className={classes.succesful}>
                            <div className={classes.modalCloseSuccess} onClick={() => { setSubmitted(false); hide() }}>X</div>
                            <img className={classes.logo} src={logo} alt="Netflix Logo" />
                            <h1>congratulations!</h1>
                            <p>The movie has been added to database successfully</p>
                        </div>
                    </div>
                </div>
            </div > :

            <div className={classes.modalContainer}>
                <div className={classes.modal} >
                    <div className={classes.modalContent} >
                        <div className={classes.modalClose} onClick={hide}>X</div>
                        <div className={classes.modalHeader}>
                            <h4 className={classes.modalTitle}>Add movie</h4>
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
                                            <input type="text" id="rating" value={rating} onChange={(e) => setRating(parseInt(e.currentTarget.value))} placeholder='7.8' />
                                        </div>
                                        <div>
                                            <label htmlFor='runtime'>runtime</label>
                                            <input type="text" id="runtime" onChange={(e) => setRuntime(parseInt(e.currentTarget.value))} placeholder='minutes' />
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor='overview'>overview</label>
                                    <textarea id="overview" value={overview} onChange={(e) => setOverview(e.currentTarget.value)} />
                                </div>

                                <div className={classes.modalFooter}>
                                    <button onClick={(event) => event.preventDefault()} className={classes.modalButton}>
                                        Reset
                                    </button>
                                    <button type={"submit"} className={classes.modalButton}>
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>



                    </div>
                </div>
            </div >
        , document.body) : null;
}

export default AddMovieModal