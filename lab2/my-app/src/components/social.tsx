import React from 'react'
import '../css/social.css'

const fb_icon_light = require("../img/connections/light/facebook.svg")
const twitter_icon_light = require("../img/connections/light/twitter.svg")
const inst_icon_light = require("../img/connections/light/instagram.svg")
const linkedin_icon_light = require("../img/connections/light/linkedin.svg")

const fb_icon_dark = require("../img/connections/dark/facebook.svg")
const twitter_icon_dark = require("../img/connections/dark/twitter.svg")
const inst_icon_dark = require("../img/connections/dark/instagram.svg")
const linkedin_icon_dark = require("../img/connections/dark/linkedin.svg")

interface SocialProps {
    isLightTheme: boolean
}

export function SocialLinks(props: SocialProps) {
    if (props.isLightTheme) {
        return(
            <div className="social_media_icons">
                <div className="social_media_icon">
                    <a href="/" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={fb_icon_light.default}
                             alt="Facebook"/>
                    </a>
                </div>
                <div className="social_media_icon">
                    <a href="/" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={twitter_icon_light.default}
                             alt="Twitter"/>
                    </a>
                </div>
                <div className="social_media_icon">
                    <a href="/blog" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={inst_icon_light.default}
                             alt="Instagram"/>
                    </a>
                </div>
                <div className="social_media_icon">
                    <a href="/blog" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={linkedin_icon_light.default}
                             alt="LinkedIn"/>
                    </a>
                </div>
            </div>
        )
    } else {
        return(
            <div className="social_media_icons">
                <div className="social_media_icon">
                    <a href="/" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={fb_icon_dark.default}
                             alt="Facebook"/>
                    </a>
                </div>
                <div className="social_media_icon">
                    <a href="/" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={twitter_icon_dark.default}
                             alt="Twitter"/>
                    </a>
                </div>
                <div className="social_media_icon">
                    <a href="./blog" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={inst_icon_dark.default}
                             alt="Instagram"/>
                    </a>
                </div>
                <div className="social_media_icon">
                    <a href="/blog" className="social_media_icon_link">
                        <img className="social_media_icon_pic" src={linkedin_icon_dark.default}
                             alt="LinkedIn"/>
                    </a>
                </div>
            </div>
        )
    }

}