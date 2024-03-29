import "./Footer.scss";
import twitter from "../../assets/Icons/twitter-icon.svg";
import fbook from "../../assets/Icons/facebook-icon.svg";
import insta from "../../assets/Icons/insta.svg";
import github from "../../assets/Icons/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerHeader__textBox">
          <div className="footerHeader__iconContainer">
            <div>
              <Link to="https://facebook.com">
                <img
                  className="footerHeader__icon"
                  src={fbook}
                  alt="facebook icon"
                />
              </Link>
              <Link to="https://twitter.com">
                <img
                  className="footerHeader__icon"
                  src={twitter}
                  alt="twitter icon"
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <img
                  className="footerHeader__icon"
                  src={insta}
                  alt="instagram icon"
                />
              </Link>
            </div>
          </div>
          <div className="footerHeader__iconBox2">
            <Link to="https://github.com/">
              <img
                className="footerHeader__icon"
                src={github}
                alt="github icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

