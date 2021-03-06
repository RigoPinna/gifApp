import React from 'react';
import { NavLink} from 'react-router-dom';


export const NavBar = () => {

    return (
        <nav >
            <ul>

                <li>
                <NavLink
                        activeClassName="isActive"
                        exact
                        to="/"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            Buscar gif
                    </NavLink>
                </li>
                <li>
                <NavLink
                        activeClassName="isActive"
                        exact
                        to="/Favorites"
                    >
                        Favoritos
                    </NavLink>

                </li>
                    

                    
            </ul>
        </nav>
    )
}