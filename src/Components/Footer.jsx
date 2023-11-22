import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"


function Footer() {
  return (
    <div className='main-footer'>

        <div className='footer'>

            <div className="footer-left">

            <div className='footer-content-content'>

                <p1>Buletin</p1>  
                <p2>Craft narratives that ignite inspiration, knowledge, and entertainment</p2>

                <div className='footer-icon'>
                    <p> <FontAwesomeIcon icon={faFacebook} /> </p>
                    <p> <FontAwesomeIcon icon={faLinkedin} /> </p>
                    <p> <FontAwesomeIcon icon={faTwitter} /> </p>
                    <p> <FontAwesomeIcon icon={faInstagram} /> </p>
                </div>

                <div className='footer-content-copyright'>
                <p>Copyright 2023 Buletin.</p>
            </div>
            </div>

            </div>

            <div className="footer-right">

            <div className='footer-content'>
                <h4>Business</h4>
                <li className='new'>Startup</li>
                <li className='new'>Employee</li>
                <li className='new'>Success</li>
                <li className='new'>Videos</li>
                <li className='new'>Markets</li>
           </div>

           <div className='footer-content'>
                <h4>Technology</h4>
                <li className='new'>Innovate</li>
                <li className='new'>Gadget</li>
                <li className='new'>Innovative Cities</li>
                <li className='new'>Upstarts</li>
                <li className='new'>Future Tech</li>
            </div>
            
            <div className='footer-content'>
                <h4>Travel</h4>
                <li className='new'>Destinations</li>
                <li className='new'>Food & Drink</li>
                <li className='new'>Stay</li>
                <li className='new'>News</li>
                <li className='new'>Videos</li>
            </div>

            <div className='footer-content'>
                <h4>Sports</h4>
                <li className='new'>Football</li>
                <li className='new'>Tennis</li>
                <li className='new'>Golf</li>
                <li className='new'>Motosports</li>
                <li className='new'>Esports</li>
            </div>

            <div className='footer-content'>
                
            </div>

            <div className='footer-content'>
                <h4>Entertainment</h4>
                <li className='new'>Movies</li>
                <li className='new'>Artist</li>
                <li className='new'>Television</li>
                <li className='new'>Influencer</li>
                <li className='new'>Viral</li>
            </div>

            <div className='footer-content'>
                <h4>Features</h4>
                <li className='new'>As Equals</li>
                <li className='new'>Call to Earth</li>
                <li className='new'>Freedom Project</li>
                <li className='new'>Inside Asia</li>
                <li className='new'>2 Degress</li>
            </div>

            <div className='footer-content'>
                <h4>Weather</h4>
                <li className='new'>Climate</li>
                <li className='new'>Strom Tracker</li>
                <li className='new'>Wildfire Tracker</li>
                <li className='new'>Earthquake</li>
                <li className='new'>Video</li>
            </div>

            <div className='footer-content'>
                <h4>More</h4>
                <li className='new'>Design</li>
                <li className='new'>Mentorship</li>
                <li className='new'>Investment</li>
                <li className='new'>Work for Buletin</li>
                <li className='new'>Support Us</li>
            </div>


            </div>

            



        </div>
        
    </div>
  )
}

export default Footer