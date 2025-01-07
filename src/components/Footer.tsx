import { contact, nav, social } from "../data/nav";

const Footer = () => {

    return <footer>
        <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
        <section>
            <h4>
                Little Lemon
            </h4>
            <ul>{nav.map(item => <li key={item.name}><a href={item.path}>{item.name}</a></li>)}</ul>
        </section>
        <section>
            <h4>
                Contact
            </h4>
            <ul>{contact.map(item => <li key={item.name}><a href={item.path}>{item.name}</a></li>)}</ul>
        </section>
        <section>
            <h4>
                Social Media Links
            </h4>
            <ul>{social.map(item => <li key={item.name}><item.svg /><a href={item.path}>{item.name}</a></li>)}</ul>
        </section>
    </footer>
}
export default Footer;