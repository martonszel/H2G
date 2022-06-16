import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

type Props = {}

const MainNavigation = (props: Props) => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li><Link to='/class-based'>ClassBased</Link></li>
                    <li><Link to='/functional'>Functional</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation