import './Header.scss'

const Header = () => {

    return (
        <div className='header'>
            <div className='header__image'>
            <a href="logo" className='header__logo'>Logo</a>
            </div>
            
            <div className='header__nav-bar'>
                <a className='header__list' href="#">Attractions</a>
                <a className='header__list' href="#">BucketList</a>
                <a className='header__list' href="#">Logout</a>
            </div>
        </div>    
    );
};

export default Header;


