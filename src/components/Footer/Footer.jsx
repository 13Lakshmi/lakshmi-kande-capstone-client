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
        <div className="footer__textBox">
          <div className="footer__iconContainer">
            <div>
              <Link to="https://facebook.com">
                <img
                  className="footer__icon"
                  src={fbook}
                  alt="facebook icon"
                />
              </Link>
              <Link to="https://twitter.com">
                <img
                  className="footer__icon"
                  src={twitter}
                  alt="twitter icon"
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <img
                  className="footer__icon"
                  src={insta}
                  alt="instagram icon"
                />
              </Link>
              <Link to="https://github.com/">
              <img
                className="footer__icon"
                src={github}
                alt="github icon"
              />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

