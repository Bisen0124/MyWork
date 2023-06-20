import { Outlet, Link } from "react-router-dom";
import './CSS/Layout.css'

import pimage from '../Assets/portfolio.png'


const Layout = () => {
  return (
    <>
      <div className="main">
        <nav className="left-side-pannel">

          <ul className="Nav-list">
            <p className="Logo"><img className="port-logo" src={pimage} width='100%' /></p>
            <li>
              <Link to="/" class="links">Home</Link>
              <Link to="/" class="mob-link"> <span class="show"><i class="fa fa-home" aria-hidden="true"></i></span>
              </Link>



            </li>
            <li>
              <Link to="/About" class="links">About</Link>

              <Link to="/About" class="mob-link">
                <span class="show"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
              </Link>
            </li>
            <li>
              <Link to="/Service" class="links">Service</Link>

              <Link to="/Service" class="mob-link">
                <span class="show"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
              </Link>
            </li>
            <li>
              <Link to="/Portfolio" class="links">Portfolio</Link>

              <Link to="/Portfolio" class="mob-link">
                <span class="show"><i class="fa fa-product-hunt" aria-hidden="true"></i></span>
              </Link>
            </li>
            <li>
              <Link to="/Contact" class="links">Contact </Link>

              <Link to="/Contact" class="mob-link">
                <span class="show"><i class="fa fa-phone-square" aria-hidden="true"></i></span>
              </Link>
            </li>

          </ul>
          <div className="copyright">
            <p>© 2023 Sandeep Bisen<br />Created by <a href="#" target="_blank">SB</a></p>
          </div>
        </nav>
        <Outlet />

      </div>

    </>
  )
};

export default Layout;