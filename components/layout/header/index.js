import React from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import Svg1 from '@/mySvg/svg1';
import Link from 'next/link';

function HeaderPage() {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <Image
              src="/assects/images/logo.png"
              width={60}
              height={20}
              alt="Picture of the author" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="./home">Home </Link>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                  <span className="nav-label">Pages <span className="caret"></span></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="testimonial.html">Testimonial</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="product">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog_list.html">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">

                  <FaSearch className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">SignUp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Login</a>
              </li>
              <Svg1 />


            </ul>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default HeaderPage