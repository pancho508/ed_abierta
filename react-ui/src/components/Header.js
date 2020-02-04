import React from 'react';
import './Header.css';
import "bootstrap/dist/css/bootstrap.css";


class Header extends React.Component{
    render(){
        return(
            <header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
            <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a href="./" className="navbar-brand">Bootstrap Menu</a>
              </div>
              <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">About <b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Vision</a></li>
                      <li><a href="#">Careers</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li className="active">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        )
    }

}

export default Header;