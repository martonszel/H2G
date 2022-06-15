import { useNavigate } from "react-router-dom";
import NewMeetupForm from '../components/NewMeetupForm'


const NewMeetupPage = () => {

    const navigate = useNavigate();

    const addMettupHandler = (meetupData) => {
        fetch('https://react-meetup-8f553-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigate('/');
            })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddNewMeetup={addMettupHandler} />
        </section>
    )
}

export default NewMeetupPage