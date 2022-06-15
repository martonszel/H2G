import Card from './Card'
import classes from './NewMeetupForm.module.css'
import { useRef } from 'react'


const NewMeetupForm = (props) => {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddNewMeetup(meetupData)

    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type="text" required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup image</label>
                    <input type="url" required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type="text" required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='descreption'>Meetup descreption</label>
                    <textarea required id="descreption" rows="10" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Metup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm