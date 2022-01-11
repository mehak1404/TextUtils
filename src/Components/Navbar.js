import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return(
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand">{props.title}</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">About </a>
          </li>
          
        </ul>
        {/* <form className="form-inline my-10 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          
        </form> */}
        </div>
        <div className={`form-check form-switch text-${props.mode=== 'light'? 'Dark' : 'light'}`}>
          <input className= "form-check-input" onClick={props.toogleMode} type="checkbox" id= "flexSwitchCheckDefault" />
          <label className= "form-check-label " htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
        </div>

    </nav>

    </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
    // para : PropTypes.string

}

