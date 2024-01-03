"use client"

import { LegalLinks } from "./Legal";
import SocialFooter from "./Social";

const Footer = () => {
    return(
        <footer className="w-full border-t border-border p-2">
            <SocialFooter />
            <LegalLinks />
        </footer>
    )
}
export default Footer;