import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light btn-dark">
                <a className="navbar-brand text-secondary" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-secondary" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-secondary" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0 text-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About Text here'
}