import {SocialLinks} from "../social";
import '../../css/works.css'
import {TemplateCard} from "./template_card";

export function Works() {
    return (
        <main>
            <section className="caption">
                <div className="container">
                    <h2 className="works_caption">What we created</h2>
                    <h1 className="works_portfolio">Our Work Portfolio</h1>
                    <p className="works_content">We help teams create great digital products by providing them with
                        tools
                        and
                        technology to make the design-to-code process universally accessible.</p>
                    <div className="connection_wrapper">
                        <SocialLinks isLightTheme={false}/>
                    </div>
                </div>
            </section>
            <section className="examples">
                <div className="container">
                    <div className="examples_type">
                        <ul className="examples_type_list">
                            <li className="type_item">
                                <a href="#" className="type_item_link">All</a>
                            </li>
                            <li className="type_item">
                                <a href="#" className="type_item_link">UI design</a>
                            </li>
                            <li className="type_item">
                                <a href="#" className="type_item_link">Webflow Design</a>
                            </li>
                            <li className="type_item">
                                <a href="#" className="type_item_link">Figma Design</a>
                            </li>
                        </ul>
                    </div>
                    <div className="templates">
                        <TemplateCard imgSrc={require("../../img/work/templates/template1.jpg")} caption="Template 1"
                                      description={desc} buttonText="View portfolio"/>
                        <TemplateCard imgSrc={require("../../img/work/templates/template2.jpg")} caption="Template 2"
                                      description={desc} buttonText="View portfolio"/>
                        <TemplateCard imgSrc={require("../../img/work/templates/template3.jpg")} caption="Template 3"
                                      description={desc} buttonText="Read case study"/>
                        <TemplateCard imgSrc={require("../../img/work/templates/template4.jpg")} caption="Template 4"
                                      description={desc} buttonText="Read case study"/>
                        <TemplateCard imgSrc={require("../../img/work/templates/template5.jpg")} caption="Template 5"
                                      description={desc} buttonText="Read case study"/>
                        <TemplateCard imgSrc={require("../../img/work/templates/template6.jpg")} caption="Template 6"
                                      description={desc} buttonText="Read case study"/>
                    </div>
                </div>
            </section>
            <section className="contact_us">
                <div className="container">
                    <h1 className="contact_us_caption">Let's build something great together</h1>
                    <p className="contact_us_content">Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                        ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                    <a href="#" className="contact_us_button_link">
                        <button className="contact_us_button" type="button">
                            Contact Us
                        </button>
                    </a>
                </div>
            </section>
        </main>
    )
}

const desc = " Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."