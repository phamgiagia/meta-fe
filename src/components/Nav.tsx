import { nav } from "../data/nav";


const Nav = () => {
    return <nav>
        <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
        <ul>
            {nav.map(item=><li key={item.name}><a href={item.path}>{item.name}</a></li>)}
        </ul>
    </nav>
}
export default Nav;