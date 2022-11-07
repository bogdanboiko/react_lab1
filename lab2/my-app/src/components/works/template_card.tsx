import React from "react";
import '../../css/work_card.css'

const arrow_img = require("../../img/arrow1b.svg")

interface CardProps {
    imgSrc: string
    caption: string
    description: string
    buttonText: string
}

export function TemplateCard(props: CardProps) {
    return(
        <div className="template_card">
            <img className="template_card-pic" src={props.imgSrc} alt="template#"/>
                <h3 className="template_card-title">{props.caption}</h3>
                <p className="template_card-content">
                    {props.description}
                </p>
                <a href="#" className="template_text_button_link">
                    <button className="template_text_button" type="button">
                        {props.buttonText}
                        <img src={arrow_img.default} alt="Arrow" className="template_text_button_arrow"/>
                    </button>
                </a>
        </div>
    )
}