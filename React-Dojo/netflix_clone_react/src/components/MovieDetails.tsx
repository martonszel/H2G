import classes from "./MovieDetails.module.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { reset } from "../features/movie-slice";
import logo from "../assets/logo.png";
import EmptyButton from "./EmptyButton";
import FullButton from "./FullButton";
import { useState } from "react";
import DeleteModal from "./Modals/DeleteModal";
import ModalContainer from "./Modals/ModalContainer";
import FormModal from "./Modals/FormModal";

const MovieDetails = () => {
  const dispatch = useAppDispatch();

  const oneMovie = useAppSelector((state) => state.movie.oneMovie);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleEditClick = () => {
    setShowFormModal(true)
  }

  const handleDeleteClick = () => {
    setShowDeleteModal(true)
  }

  return (
    <div className={classes.detailsContainer}>
      <div className={classes.header}>
        <img className={classes.logo} src={logo} alt='Netflix Logo' />
        <button
          onClick={() => dispatch(reset())}
          className={classes.searchButton}
        >
          Search
        </button>
      </div>

      <div className={classes.content}>
        <div className={classes.div1}>
          <img src={oneMovie.thumbnail} alt='' />
        </div>
        <div className={classes.div2}>
          <h1>
            {oneMovie.title} <span>{oneMovie.rating}</span>
          </h1>
        </div>
        <div className={classes.div3}>
          <p>{oneMovie.genre}</p>
        </div>
        <div className={classes.div4}>
          <p>
            {oneMovie.release_date} <span>{oneMovie.runtime}</span>
          </p>
        </div>
        <div className={classes.div5}>
          <p>{oneMovie.overview}</p>
          <div className={classes.buttonContainer}>
            <EmptyButton name='Delete' onClick={() => handleDeleteClick()} />
            <FullButton name='Edit' onClick={() => handleEditClick()} />
          </div>
        </div>
        <ModalContainer close={() => setShowDeleteModal(false)} show={showDeleteModal}> <DeleteModal close={() => setShowDeleteModal(false)} />    </ModalContainer >
        <ModalContainer close={() => setShowFormModal(false)} show={showFormModal}> <FormModal close={() => setShowFormModal(false)} />    </ModalContainer >
      </div>
    </div>
  );
};

export default MovieDetails;
