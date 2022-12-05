import { ReactComponent as IconMenu } from "../../assets/icons/points.svg"

function NavBar() {
    return (
        <div className={'navBarContainer'}>
            <div className='navBar'>
                <nav>
                    <ul>
                        <li><a id='shop' href="#" style={{color: '#d2d2d2', fontSize : '24px' , fontWeight: 'bold'}}>SHOP</a></li>
                        <IconMenu style={{color: '#ffffff' ,fill : '#ffffff', transform: 'scale(1.5)'}}/>
                        <li><a href="#">New!</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Clothes</a></li>
                        <li><a href="#">Acessories</a></li>
                        <li><a href="#">Toys</a></li>
                        <li><a href="#">Home Decór</a></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Colletibles</a></li>
                        <li><a href="#">Sales</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;