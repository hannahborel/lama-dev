import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
      <div class={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                  <div className="left">
                        <a href="#intro" className="logo">HB.</a>
                        <div className="itemContainer">
                              <Person className="icon" />
                              <span>281 782 9013</span>
                              <Mail className="icon" />
                              <span>hannahborel@icloud.com</span>
                        </div>
                  </div>
                  <div className="right">
                        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                              <span className="1"></span>
                              <span className="2"></span>
                              <span className="3"></span>
                        </div>
                  </div>
            </div>
      </div>
  )
}
