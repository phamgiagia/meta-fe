import { SocialItem } from "../types/SocialItem";
import { Linkitem } from "../types/LinkItem";
import { FacebookIcon } from "../components/FacebookIcon";

export const nav: Linkitem[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Menu",
        path: "/menu"
    },
    {
        name: "Reservations",
        path: "/reservations"
    },
    {
        name: "Order Online",
        path: "/order"
    },
    {
        name: "Login",
        path: "/login"
    },
]

export const contact: Linkitem[] = [
    {
        name: "Address",
        path: "https://maps.app.goo.gl/UiZgmcXoVCiUGTNC6"
    },
    {
        name: "Phone Number",
        path: "tel:+13123613800"
    },
    {
        name: "Email",
        path: "mailto:contact@theroanokerestaurant.com"
    }
]


export const social: SocialItem[] = [
    {
        name: "Facebook",
        path: "https://www.facebook.com/salsinroanoke",
        svg: FacebookIcon
    },
    {
        name: "X",
        path: "tel:+13123613800",
        svg: FacebookIcon
    },
    {
        name: "Instagram",
        path: "mailto:contact@theroanokerestaurant.com",
        svg: FacebookIcon
    }
]