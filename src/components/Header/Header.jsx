import './Header.scss'



const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                                 Attractions
                        </li>
                        <li className="navbar__item">
                                Bucket list
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;