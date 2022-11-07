import '../../css/blog_card.css'

interface PropsBlog {
    imgSrc: string
    date: string
    caption: string
    content: string
}

const arrow_img = require('../../img/arrow1b.svg')

export function BlogCard(props: PropsBlog) {
 return(
     <div className="post_card">
         <img className="post_card-pic" src={props.imgSrc} alt="blog_img"/>
             <h3 className="post_card-date">{props.date}</h3>
             <h1 className="post_card-caption">{props.caption}</h1>
             <p className="post_card-content">
                 {props.content}
             </p>
             <a href="./works.html" className="post_card_text_button_link">
                 <button className="post_card_text_button" type="button">
                     Read More
                     <img src={arrow_img.default} alt="Arrow" className="post_card_text_button_arrow"/>
                 </button>
             </a>
     </div>
 )
}