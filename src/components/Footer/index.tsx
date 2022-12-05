import { ReactComponent as LogoFooter } from "../../assets/imgs/marvelLogoFooter.svg"
import { ReactComponent as IconTwitter } from "../../assets/icons/iconTwitter.svg"
import { ReactComponent as IconYoutube } from "../../assets/icons/iconYoutube.svg"
import { ReactComponent as IconFacebook } from "../../assets/icons/iconFacebook.svg"

function Footer() {
    return (
        <div className={'footerContainer'}>
            <div className='footer'>
                <div className='footerLinks'>
                    <ul>
                        <li><h2>Comics</h2></li>
                        <li><h3>Release calendar</h3></li>
                        <li><h3>Marvel Unlimited</h3></li>
                        <li><h3>Redeem Digital Copy</h3></li>
                        <li><h3>Shop Digital Comics</h3></li>
                        <li><h3>Print Subscriptions</h3></li>
                        <li><h3>Developer portal</h3></li>
                    </ul>
                    <ul>
                        <li><h2>Characters</h2></li>
                        <li><h3>Spider-Man</h3></li>
                        <li><h3>Avengers</h3></li>
                        <li><h3>Iron Man</h3></li>
                        <li><h3>Doctor Strange</h3></li>
                        <li><h3>Captain America</h3></li>
                    </ul>
                    <ul>
                        <li><h2>Kids</h2></li>
                        <li><h3>Marvel HQ</h3></li>
                        <li><h3>Kids Games</h3></li>
                        <li><h3>Kides Videos</h3></li>
                        <li><h3>Kids Activities</h3></li>
                    </ul>
                    <ul>
                        <li><h2>Marvel</h2></li>
                        <li><h3>Sign Up</h3></li>
                        <li><h3>Marvel Mastercard</h3></li>
                        <li><h3>Help / FAQs</h3></li>
                        <li><h3>Email Preferences</h3></li>
                        <li><h3>About Marvel</h3></li>
                        <li><h3>Advertising</h3></li>
                        <li><h3>Internships</h3></li>
                        <li><h3>Careers</h3></li>
                    </ul>
                    <ul>
                        <li><h2>Insider</h2></li>
                        <li><h3>Join Today</h3></li>
                        <li><h3>Home</h3></li>
                        <li><h3>Activities</h3></li>
                        <li><h3>Rewards</h3></li>
                        <li><h3>Member Profile</h3></li>
                        <li><h3>FAQs</h3></li>
                        <li><h3>Marvel Insider Terms of Use</h3></li>
                    </ul>
                </div>
                <div className='rigthsSession'>
                    <ul>
                        <li><LogoFooter style={{ transform: 'scale(1)' }} /></li>
                        <li><h3>Terms of Use</h3></li>
                        <li><h3>Privacy Policy</h3></li>
                        <li><h3>Your California Privacy Policy</h3></li>
                        <li><h3>License Agreement</h3></li>
                        <li><h3>Interest-Based Ads</h3></li>
                        <li><h3>2018 Marvel</h3></li>
                        <li><div className='footerSocialIcon'>
                            <IconFacebook style={{ transform: 'scale(1.2)', fill: '#818181' }} />
                            <IconYoutube style={{ transform: 'scale(1.3)',fill: '#818181' }}/>
                            <IconTwitter style={{ transform: 'scale(1.3)', fill: '#818181' }} />
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;