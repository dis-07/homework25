import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <NavLink className={({isActive}) => (isActive ? "active" : "")} to='/'>
                HOME
            </NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='users' className={({isActive}) => (isActive ? "active" : "")}>
                            USERS
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to='hotels' className={({isActive}) => (isActive ? "active" : "")}>
                            HOTELS
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;