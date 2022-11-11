import { NavLink, Outlet } from "react-router-dom";

const Root = () => {

    return (
        <div>
            <header className="header">
                <NavLink className='home' to='/'>
                    HOME
                </NavLink>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink className='users' to='users'>
                                USERS
                            </NavLink>
                        </li>
                        <li className="li">
                            <NavLink className='hotels' to='hotels'>
                                HOTELS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet/>
        </div>
    )
}

export default Root;