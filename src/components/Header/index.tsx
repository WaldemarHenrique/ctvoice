import logo from "../../assets/logo.jpg"

import { ReactComponent as IconMenu } from "../../assets/icons/points.svg"
import { ReactComponent as IconSeach } from "../../assets/icons/search.svg"
import { ReactComponent as IconTwitter } from "../../assets/icons/iconTwitter.svg"
import { ReactComponent as IconYoutube } from "../../assets/icons/iconYoutube.svg"
import { ReactComponent as IconFacebook } from "../../assets/icons/iconFacebook.svg"
import { ReactComponent as IconCart } from "../../assets/icons/iconCart.svg"


function Header() {
    return (
        <div className={'headerContainer'}>
            <div className='header'>
                <div className="headerWrapper">
                    <div className="headerItem01">
                        <img src={logo} alt='logo' />
                    </div>
                    <div className="headerItem02">
                        <IconFacebook className='socialIcon' />
                        <IconYoutube className='socialIcon' />
                        <IconTwitter className='socialIcon' />
                    </div>
                    <div className="headerItem03">
                        <div className={'headerWrapperLogin'}>
                            <span style={{ cursor: 'pointer' }}>WELCOME</span>
                            <IconMenu style={{ marginLeft: '1rem' }} />
                            <span style={{ marginLeft: '1rem', cursor: 'pointer' }}>MY ACCOUNT</span>
                        </div>
                        <div className={'headerWrapperSearch'}>

                            <input type="text" id="search_id" name="search" placeholder="SEARCH MARVEL SHOP" />
                            <IconSeach className='searchIcon' />
                            <IconMenu style={{ transform: 'scale(1.5)' }} />
                            <IconCart className='cartIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;