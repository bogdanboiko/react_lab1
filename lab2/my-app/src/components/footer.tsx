import React from 'react'
import '../css/footer.css'

import {SocialLinks} from "./social";

const logo_icon = require("../img/Logo.svg")

interface FooterProps {
    links: React.ReactNode[]
}

export function Footer(props: FooterProps) {
    const links = props.links.map(link =>
        <li className="footer_navigation_item">
            <a href="/" className="footer_navigation_link">{link}</a>
        </li>
    )

    return(
        <footer className="footer">
            <div className="footer_content">
                <div className="container">
                    <div className="footer_content_wrap">
                        <div className="logo_container">
                            <div className="logo">
                                <a href="/" className="header_logo-link">
                                    <img className="header_logo-pic" src={logo_icon.default} alt="{Finsweet"/>
                                </a>
                            </div>
                            <div className="logo_subtitle">
                                We are always open to discuss your project and improve your online presence.
                            </div>
                        </div>
                        <div className="lets_talk">
                            <h3 className="lets_talk_title">
                                Lets talk!
                            </h3>
                            <p className="lets_talk_desc">
                                We are always open to discuss your project, improve your online presence and help with
                                your UX/UI design challenges.
                            </p>
                            <SocialLinks isLightTheme={true}/>
                        </div>
                    </div>
                    <div className="contact_info">
                        <div className="email_info">
                            <h2 className="contact_info_title">
                                Email me at
                            </h2>
                            <p className="contact_info_subtitle">
                                contact@website.com
                            </p>
                        </div>
                        <div className="call-info">
                            <h2 className="contact_info_title">
                                Call Us
                            </h2>
                            <p className="contact_info_subtitle">
                                0927 6277 28525
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_links">
                <div className="wraper">
                    <div className="footer_links_wrap">
                        <p className="copyright_info">
                            Copyright 2021, Finsweet.com
                        </p>
                        <nav className="footer_navigation">
                            <ul className="navigation_list">
                                {links}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}