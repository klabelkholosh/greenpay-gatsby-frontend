import React, { useState } from 'react'
import LoginButton from './buttons/LoginButton'

export interface HeaderProps {
    content: {
      logo: {
        file: {
          url: string
        }
      }
    }
  }
  
  const Header: React.FC<HeaderProps> = ({ content, ...props }) => {

  // to get around Bootstrap / React navbar aria click clash, we can just use onClick with React state
  const toggleNavbar = () => {
    showNavbar === "" ? setNavbarState("show") : setNavbarState("");
  }

  const [showNavbar, setNavbarState] = useState("");

  return (
    <div className="container">
        <div className="p-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">

                <div className="container px-5">

                <a href="#">
                    <img style={{ height: '75px', margin: "0 auto" }} alt="" src={content?.logo.file.url}/>
                </a>
                
                <button className="navbar-toggler" onClick={toggleNavbar} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse justify-content-end " + showNavbar} id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                            <LoginButton className="nav-item nav-link" buttonText="Login">
                                Log in
                            </LoginButton>
                            <LoginButton className="nav-item nav-link" buttonText="Sign up" borderColor="transparent">
                                Sign Up
                            </LoginButton>
                            {props.children}
                    </div>
                </div>

                </div>

            </nav>
        </div>
    </div>
  )
}

export default Header;
