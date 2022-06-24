import React from 'react'
import ReactDOM from 'react-dom';
import classes from './AddMovieModal.module.css'


type Props = {
    show: boolean
    hide: () => void;
}

const AddMovieModal: React.FC<Props> = ({ show, hide }) => {


    if (!show) {
        return null
    }


    return show ? ReactDOM.createPortal(

        <div className={classes.modalContainer}>

            <div className={classes.modal} >

                <div className={classes.modalContent} >
                    <div className={classes.modalClose} onClick={hide}>X</div>
                    <div className={classes.modalHeader}>
                        <h4 className={classes.modalTitle}>Add movie</h4>
                    </div>

                    <div className={classes.modalBody}>
                        <form  >
                            <div className={classes.flexContainer}>
                                <div className={classes.flexLeft} >
                                    <div>
                                        <label htmlFor='title'>title</label>
                                        <input type="text" id="title" />
                                    </div>
                                    <div>
                                        <label htmlFor='url'>movie url</label>
                                        <input type="text" id="url" placeholder='https://' />
                                    </div>
                                    <div>
                                        <label htmlFor='genre'>genre</label>
                                        <input type="text" id="genre" />
                                    </div>
                                </div>

                                <div className={classes.flexRight} >
                                    <div>
                                        <label htmlFor='release'>release date</label>
                                        <input type="date" id="release" />
                                    </div>
                                    <div>
                                        <label htmlFor='rating'>rating</label>
                                        <input type="text" id="rating" placeholder='7.8' />
                                    </div>
                                    <div>
                                        <label htmlFor='runtime'>runtime</label>
                                        <input type="text" id="runtime" placeholder='minutes' />
                                    </div>
                                </div>

                            </div>

                            <div>
                                <label htmlFor='title'>overview</label>
                                <textarea />
                            </div>

                            <div className={classes.modalFooter}>
                                <button onClick={(event) => event.preventDefault()} className={classes.modalButton}>
                                    Reset
                                </button>
                                <button onClick={(event) => event.preventDefault()} className={classes.modalButton}>
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