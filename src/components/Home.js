
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
                <img src="./images/home-image.jpg" alt="" />
                
            </div>
            <div className='home-center'>
                <div className='home-center-box'><i class="fa-solid fa-utensils"></i> <p>Food</p></div>
                <hr />
                <div className='home-center-box'><i class="fa-solid fa-bed"></i> <p>Accomodation</p></div>
                <hr />
                <div className='home-center-box'><i class="fa-solid fa-person-hiking"></i> <p>Games</p></div>
                <hr />
                <div className='home-center-box'><i class="fa-solid fa-kiwi-bird"></i> <p>Scenary</p></div>
            </div>
            <div className='home-bottom'>
                <div className='home-bottom-left'>
                    <h3>About the Uradi Encore Hotel & Suites</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Aliquam leo diam, varius et facilisis quis, consectetur in quam.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                    posuere cubilia curae
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