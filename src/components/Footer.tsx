import { contact, nav } from "../data/nav";

const Footer = () => {

    return <footer>
        <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
        <section>
        <h3>
            Little Lemon
        </h3>
        {nav.map(item => <li key={item.name}><a href={item.path}>{item.name}</a></li>)}
        </section>
        <section>
        <h3>
            Contact
        </h3>
        {contact.map(item => <li key={item.name}><a href={item.path}>{item.name}</a></li>)}
        </section>
        <section>
        <h3>
            Social Media Links
        </h3>
        {contact.map(item => <li key={item.name}><a href={item.path}>{item.name}</a></li>)}
        </section>
    </footer>
}
export default Footer;