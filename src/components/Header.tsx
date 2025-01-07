import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = ()=><header>
    <meta name="description" content="Little Lemon Restaurant, best restaurant for food lover."/>
    <meta name="og:title" content="Little Lemon Restaurant"/>
    <meta name="og:description" content="Little Lemon Restaurant, best restaurant for food lover."/>
    <meta name="og:image" content="/assets/Logo.svg"/>
    <Nav/>
    <NavMobile/>
    </header>
export default Header;