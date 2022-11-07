import React from 'react'
import '../css/header.css'

const logo_icon = require("../img/Logo.svg")


interface HeaderProps {
    links: React.ReactNode[]
}

export function Header(props: HeaderProps) {
    const links = props.links
    const listItems = links.map(link =>
        <li className="navigation_item">
            <a href="/" className="navigation_link">{link}</a>
        </li>
    );
    return (
        <header className="header">
            <div className="container">
                <div className="header_wraper">
                    <div className="logo">
                        <a href="/blog" className="header_logo-link">
                            <img className="header_logo-pic" src={logo_icon.default} alt="{Finsweet"/>
                        </a>
                    </div>

                    <nav className="navigation">
                        <ul className="navigation_list">
                            {listItems}
                            <li className="navigation_item">
                                <a href="/blog" className="navigation_link">
                                    <button className="header_button" type="button">
                                        Contact Us
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


