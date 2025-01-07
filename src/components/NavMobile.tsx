import { nav } from "../data/nav";

const MenuItem = () => {
    return <ul>
        {nav.map(item => <li key={item.name}><a href={item.path}>{item.name}</a></li>)}
    </ul>
}

const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"></path>
</svg>
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
    <path fill="currentColor" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z"></path>
</svg>
const CloseMenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
    <path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"></path>
</svg>


const NavMobile = () => {
    return <nav className="nav-mobile">
        {/* menu icon toggle */}
        <MenuIcon />
        <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
        {/* cart icon toggle */}
        <CartIcon />
    </nav>
}
export default NavMobile;