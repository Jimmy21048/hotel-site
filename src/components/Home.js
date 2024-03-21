
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
export default function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)
    },[time])
    return (
        <div className="home">
            <div className='home-top'>
                <p>Uradi</p>
                <p>Encore</p>
                <p>Resort</p>
                <i>Experience the best</i>
                {/* <img src="./images/home-image.jpg" alt="" /> */}
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
                    <h3>About the Uradi Encore Hotel & Suites</h3>
                    <p>
                    Uradi Encore Resort offers luxurious accommodations
                    amidst stunning scenery. Indulge in exquisite delicacies
                    and enjoy outdoor games. Perfect for relaxation and adventure,
                    our resort promises an unforgettable stay with exceptional
                    hospitality in a serene setting.
                    </p>
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