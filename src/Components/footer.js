
import { footerData} from './data.js';
import Grid from '@mui/material/Grid';
export default function Footer() {
    return (
        <>
        <div className='footer'>
            <h1>Get in touch</h1>
            <div className='footer-content'>
                <Grid className="grid-container" container spacing={2}>
                    {footerData.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div className="review-card">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <p>{item.Info}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                </div>
                    <div className='footer-header'>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#consultion">FAQ</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
            </div>
        </>
    )
}


