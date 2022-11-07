import '../../css/blog.css'
import {BlogCard} from "./blog_card";

export function Blog() {
    const blog_img = require('../../img/blog/people-working-in-front-of-computer-3182763.jpg')
    const date = "27 Jan 2021"
    const caption = "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
    const content = "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"

    return(
        <main>
            <section className="context">
                <div className="container">
                    <h1 className="context_caption">A UX Case Study on Creating a Studious Environment for Students</h1>
                    <h3 className="context_date">Andrew Jonson Posted on 27th January 2021</h3>
                    <img src={blog_img}/>
                        <p className="context_desc">Apparently we had reached a great height in the atmosphere, for the
                            sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts
                            the horizon of the sea to the level of the spectator on a hillside.</p>
                        <div className="context_ref_container">
                            <a className="context_read_more_link" href="#">Read more</a>
                        </div>
                </div>
            </section>
            <section className="blog">
                <div className="container">
                    <h1 className="blog_caption">Our Blog</h1>
                    <div className="posts">
                        <BlogCard imgSrc={require('../../img/blog/photo-of-people-using-laptops-3182833.jpg')} date={date} caption={caption} content={content}/>
                        <BlogCard imgSrc={require('../../img/blog/side-view-photo-of-smiling-woman-in-a-black-and-white-striped-top-sitting-on-a-bed-while-using-a-laptop-3765035.jpg')} date={date} caption={caption} content={content}/>
                        <BlogCard imgSrc={require('../../img/blog/top-view-photo-of-person-holding-earphones-3183198.jpg')} date={date} caption={caption} content={content}/>
                        <BlogCard imgSrc={require('../../img/blog/top-view-photo-of-people-having-a-meeting-3182822.jpg')} date={date} caption={caption} content={content}/>
                        <BlogCard imgSrc={require('../../img/blog/man-wearing-red-crew-neck-shirt-1125028.jpg')} date={date} caption={caption} content={content}/>
                        <BlogCard imgSrc={require('../../img/blog/group-of-person-sitting-indoors-3184306.png')} date={date} caption={caption} content={content}/>
                    </div>
                </div>
            </section>
        </main>
    )
}