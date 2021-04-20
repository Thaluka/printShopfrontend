import React from 'react'
import { Image } from 'react-bootstrap'
import aboutOne from '../Images/about1.png'

function About() {
  return (
    <div className="pt-5"  style={{background:'#F8F9FB'}}>
            <div className="container pt-5 pb-5">
               <div className="d-flex justify-content-center pt-5">
                 <h1>ABOUT US</h1>
               </div>
               <div className="container pt-5 pb-5">
                 <p><strong>Print house is a leading offset printing company in Sri Lanka. At Print House we make it our 
                    business to produce printed pieces that keep you looking good.</strong>
                    <br/>
                    We go the extra mile time after time to ensure your project is done right. From business cards 
                    to full color catalogs, every project is produced with attention to detail, budget and timeline. We deliver 
                    results that meet your needs and exceed your expectations.
                    <br/>
                    Our services expand to a wider range, from brochures, business cards, leaflets, posters, book covers, book marks, 
                    stickers.
                    Our printed stationery includes letterheads, compliment slips, and business card printing and can be supplied on a wide range.
                    We do both graphics design and printing. Our teams of designers are well trained and well experienced creative group.
                 </p>
               </div>
               <div className="d-flex justify-content-center m-2">
                      <Image src={aboutOne} fluid  height="130px" width="600px" className="border border-2 shadow"/>
               </div>
               <div>
                 <p>We have introduced new trends Sri Lanka printing industry by setting examples for other Sri Lankan printing companies with our 
                   outstanding performance in the printing industry. 
                   The technology we use for our printing work are latest, the equipment is imported from worlds best printing equipment manufactures.
                   The software we use for the designing work is most popular designing software in the world, Adobe and Corel are two brand names.
                 </p>
                 <br/>
                 <p>
                 Recently we have expanded to a larger facility located in Southern province Galle city. Our move has allowed us to add state of the 
                 art equipment to help meet deadlines and increase productivity. We’ll turn your concept into a finished product you will be proud to 
                 distribute!
                 </p>
               </div>
            </div>
        
    
  </div>
  )
}

export default About
