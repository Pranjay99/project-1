import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home">
        <main>
            <h1>TechyStar</h1>
            <p>solution to all your problems</p>
        </main>
        
    </div>

    <div className='Home2'>
        <img src={vg} alt="graphics"/>

        <div>
            <p>
            every day we are leading tech company whose aim is to increase the problem solving ability in children

            </p>
        </div>
    </div>

    <div className='Home3' id='about'>

        <div>
            <h1>Who we are?</h1>
            <p>You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.

The browser will automatically remove any extra spaces and lines when the page is displayed:
The  tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

The  element is used to separate content or define a changein an HTML page
</p>
        </div>


    </div>


    <div className='Home4' id='brand'>

        <div>
            <h1>Brands</h1>
            <article>
                <div style ={
                    {animationDelay: "0.3s",}
                }>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style ={
                    {animationDelay: "0.5s",}
                }>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style ={
                    {animationDelay: "0.7s",}
                }>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style ={
                    {animationDelay: "0.3s",}
                }>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
        


    </div>

    </>
  )
}

export default Home