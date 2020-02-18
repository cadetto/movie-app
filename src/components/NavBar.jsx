import React from 'react';

const NavBar = () => {

    return(
        <div className="navbar is-dark">
            <div class="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <h2>MovieApp</h2>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <button className="button is-primary">Movies</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default NavBar;