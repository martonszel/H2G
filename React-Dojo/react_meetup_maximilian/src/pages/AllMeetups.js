import MeetupList from '../components/MeetupList'
import { useState, useEffect } from "react";

const AllMeetupsPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-meetup-8f553-default-rtdb.europe-west1.firebasedatabase.app/meetups.json').then((response) => {
            return response.json()
        }).then((data) => {

            const meetups = []

            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
            }
            setIsLoading(false)
            setLoadedMeetups(meetups)
        })
    }, [])

    if (isLoading) {
        return (
            <section><p>Loading...</p></section>
        )
    }

    return (
        <div><h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetupsPage