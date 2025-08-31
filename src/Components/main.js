//////MaterialIcon/////
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//////MaterialIcon/////
//////Data/////
import Homes from '../imegs/living.jpg'
import Woman from '../imegs/woman.jpg'
import {Asked, data} from './data.js';
import {Services} from './data.js';
import {Reviews} from './data.js';
import {customerReviews} from './data.js';
//////Data/////
/////Components//////
import Card from '../Components/cards.js';
import AskedCards from '../Components/asked.js';
import CustomerReviews from '../Components/customerReviews.js';
import Form from './forme.js';
/////Components//////


export default function Main() {
    return (
        <>
        <div className="home-main" id='home'>
            <div className="main-content">
                <Grid className='main-content-text' container spacing={2}>
                     <Grid className='main-text-h1' size={8}>
                    <h1>Interior Design
                     <br/> by Stephanie Smith
                     </h1>
                    </Grid>
                   
                    <Grid className='main-text-p' size={4}>
                     <div className="main-btn">
                    <p>I'll help you redefine your space into a reflection of your unique style and personality. Together, let's infuse creativity, functionality, and elegance into every corner, crafting spaces that inspire and delight. Welcome to a partnership where your dream space becomes a shared masterpiece.</p>
                        <a href="#service" className="btn">
                            Check services <ArrowForwardIosIcon/>
                        </a>   
                     </div>
                     <div className='circle'>
                        <ArrowDownwardIcon/>
                     </div>
                    </Grid>
                </Grid>
                 <div className='line'></div>
            </div>
            <div className='main-img'>
                <img src={Homes} alt="home" />
            </div>
            <div className='main-title'>
                <h1>Let's craft something extraordinary together.</h1>
                <p>Step inside!</p>
            </div>
        </div>
        <div className = "reviews">
                <Grid className="grid-container" container spacing={2}>
                    {data.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div className="review-card">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
        </div>
        <div className='service' id='service'>
            <h1>Services | Offer</h1>
            <p>Explore the services we offer to transform your space.</p>
            <div className='container'>
                <div className='cards'>
                    {
                        Services.map((services) => {
                            const { id, title, description, img, icon } = services;
                        return (
                            <Card 
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                img={img }
                                icon={icon}
                            />
                        )
                        })
                    }
                </div>
            </div>
        </div>
        <div className= 'about'id='about'>
           <div className='container'>
             <div className='about-content'>
                <div className = 'img'>
                <img src={Woman} alt='about' />
            </div>
            <div className='about-info'>
                <h1>Get to know me well</h1>
                <span>Stephanie Smith</span>
                <p className='about-text'>
                    Hello, I'm Stephanie Smith, your dedicated real estate partner committed to helping you
                     achieve your property goals. With a profound passion for real estate and a commitment 
                     to excellence, I offer a wealth of knowledge and expertise to every client interaction."
                    </p>
                    <p>
                         My personalized approach ensures that each home search or sale is meticulously
                      tailored to meet your unique needs and aspirations. Whether you're a first-time buyer,
                       seasoned investor, or seeking to sell your property, rest assured, I prioritize 
                       professionalism and integrity to ensure a seamless and rewarding experience. Let's
                        collaborate to navigate the dynamic real estate market and transform your property 
                        aspirations into successful outcomes.
                    </p>
                    <h2>Stephanie Smith</h2>
                    <p className='about-text2'>Your trusted real estate representant</p>
                </div>
             </div>
           </div>
        </div>
        <div className='review-main'>
            <div className='review-content'>
                <h1>roniclesInterior design chronicles</h1>
            <p>My Journey Through Inspirational Spaces, Featuring Some Recently Designed Corners.</p>
            </div>
              
                    {
                        Reviews.map((review) => {
                            const { id, img } = review;
                            return (
                                <div className='review-card' key={id}>
                                    <img src={img} alt={`Review ${id}`} />
                                </div>
                            )
                        })
                    }
              
            </div>
           <div className='customerReviews'>
                <div className='container'>
                    <CustomerReviews reviews={customerReviews} />
                </div>
            </div>
            <div className='interview'>
                <div className='container'>
                    <h1>Let's craft dreams into interiors</h1>
                </div>
            </div>
            <div className='ask' id='consultion'>
                    <div className='ask-text'>
                        <h1>Frequently asked questions</h1>
                        <p>We are here to help you!</p>
                    </div>
                <div className='container'>
                    <div className='cards'>
                    {
                        Asked.map((asked) => {
                            const { id, title, description, icon } = asked;
                        return (
                            <AskedCards 
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                icon={icon}
                            />
                        )
                        })
                    }
                </div>
                </div>
            </div>
            <div className= "img-fixed">
                <div className="imgfixed-content"></div>
            </div>
            <div className='form' id='contacts'>
                <div className='container'>
                    <Form/>
                </div>
            </div>

    </>
    )
}
