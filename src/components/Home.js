
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImages from './homeSlideImages';
import './App.css';
export default function Home() {
    const [time, setTime] = useState(new Date());
    const [slide, setSlide] = useState(0);

    //changing the time
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    },[])

    //changing the slides
    useEffect(() => {
        const inter = setInterval(() => {
            if(slide === homeImages.length-1) {
                setSlide(0);
            } else {
                setSlide(slide => slide + 1);
            }
        },7000)

        return () => clearInterval(inter);
    },[slide]);



    return (
        <div className="home">
            <div className='home-top'>
                <p>Uradi</p>
                <p>Encore</p>
                <p>Resort</p>
                <i>Experience the best</i>
            </div>
            <h3 className='home-services-title'>Our Services</h3>
            <div className='home-center'>
                <div className='home-center-box'><i className="fa-solid fa-utensils"></i> <p>Food</p></div>
                <hr />
                <div className='home-center-box'><i className="fa-solid fa-bed"></i> <p>Accomodation</p></div>
                <hr />
                <div className='home-center-box'><i className="fa-solid fa-person-hiking"></i> <p>Games</p></div>
                <hr />
                <div className='home-center-box'><i className="fa-solid fa-kiwi-bird"></i> <p>Scenary</p></div>
            </div>
            <div className='home-bottom'>
                <div className='home-bottom-left'>
                    <img src={homeImages[slide].img} alt='resort-photos' />
                    <div>
                        <h3>About the Uradi Encore Hotel & Suites</h3>
                        <p>
                        Uradi Encore Resort offers luxurious accommodations
                        amidst stunning scenery. Indulge in exquisite delicacies
                        and enjoy outdoor games. Perfect for relaxation and adventure,
                        our resort promises an unforgettable stay with exceptional
                        hospitality in a serene setting.
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='home-bottom-right'>
                    <p>{ time.toLocaleDateString()}</p>
                    <p>{ time.toLocaleTimeString() }</p>
                    <Link to="/main" >Explore Our Services</Link>
                </div>
            </div>
        </div>
    )
}