import { SocialItem } from "../types/SocialItem";
import { Linkitem } from "../types/LinkItem";
import { FacebookIcon } from "../components/icons/FacebookIcon";
import { XIcon } from "../components/icons/XIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";

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
        path: "https://www.facebook.com/salsinroanoke",
        svg: XIcon
    },
    {
        name: "Instagram",
        path: "https://www.facebook.com/salsinroanoke",
        svg: InstagramIcon
    }
]