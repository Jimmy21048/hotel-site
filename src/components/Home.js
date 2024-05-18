
import { useState, useEffect, useContext, useRef } from 'react';
import './App.css';
import { AuthContext } from "../helpers/AuthContext"
import axios from 'axios';


export default function Home() {
    const { authState, loginState, setLoginState, setAuthState } = useContext(AuthContext);
    const [time, setTime] = useState(new Date());
    const username = useRef({fname: '', lname: ''});

    useEffect(() => {
        setTimeout(() => {
            setLoginState("");
        }, 4000);
    }, [])

    useEffect(() => {
        // axios.get("http://localhost:3001/login/auth", {
        axios.get("https://uradi-encore-server.onrender.com/login/auth", {
          headers : {
            accessToken: localStorage.getItem("accessToken")
          }
        })
        .then((response) => {
            console.log(response);
          if(response.data.error) {
            setAuthState(false);
          } else {
            setAuthState(true);
            username.current = ({
              fname: response.data.fname,
              lname: response.data.lname,
              fnameI: response.data.fnameI,
              lnameI: response.data.lnameI
            })
          }
        })
      }, [])

    //changing the time
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    },[])

    //changing the slides



    return (
        <div className="home">
            <div className='home-page'>
                <header className='home-page-header'>
                    <a className='hotel-logo' href='/'>
                        <img src='../images/uradi-logo.png' alt='hotel-logo' />
                    </a>

                    <div className='home-page-left'>
                        {
                            !authState ? 
                            <>
                                <a className='home-page-auth' href='/signup' >signup</a>
                                <a className='home-page-auth' href='/login' >login</a>
                            </> :
                            <a className='user-account-initials' href='/account'>{username.current.fnameI} {username.current.lnameI}</a>
                        }
                    </div>
                </header>

                <div className='home-body'>
                    <div className='home-body-left'>
                        <p className='error-message' style={{color:"red"}}>{loginState}</p>
                        <p className='hotel-title'>Uradi Encore Hotel & Resort</p>
                        <i className='i'>Classic elegance in the heart of Kenya</i>
                        <i className='i'>Embark on a culinary journey like no other</i>

                        <div className='home-links'>
                            <a className='home-link' href='/main/rooms'>Book a Room</a>
                            <a className='home-link' href='/main/foods'>Order Food</a>
                        </div>

                        <a href='#main' className='home-link-2'><i class="fa-solid fa-chevron-down"></i></a>
                    </div>
                    
                </div>
            </div>
            <div id='main'>
                <div className='main-about'>
                    <div className='main-about-content'>
                        <h2>About the Uradi Encore H&R</h2>
                        Welcome to Uradi Encore Restaurant and Resort, where luxury meets hospitality in the heart of Kisii Town. As a prestigious 5-star hotel, we pride ourselves on offering a myriad of services and amenities to ensure an unforgettable experience for every guest.<br/><br/>

                        <p>For accommodation, our luxurious rooms and suites provide the perfect retreat after a day of exploration or business activities. Immerse yourself in comfort and style, with modern amenities and breathtaking views that promise a restful stay.</p><br/><br/>
                    </div>
                    <img src='../images/main-image3.jpg' alt='about'></img>
                </div>
                
                <div className='main-services'>
                    <h3 className='main-services-title'>Our Services</h3>

                    <div className='main-services-body'>
                        <div className='services-box'>
                            <a  href='/main/foods' className='main-services-link'>
                                <img loading="lazy" src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600" alt='foods'/>
                                <div className='services-box-details'>
                                    <h4>Order Food</h4>
                                    <p>Make an order from a variety of foods from different cultures and appetites</p>
                                    <div className='make-order'>Make an Order</div>
                                </div>
                            </a>
                            <div className='main-services-details'>
                                "Indulge your taste buds in a culinary journey like no other!<br/>
                                Our food section tantalizes with a symphony of flavors, where every dish tells a story.<br/>
                                From savory delights to sweet sensations,<br/>
                                savor the essence of our carefully crafted menu,<br/>
                                meticulously prepared to delight even the most discerning palates.<br/>
                                Bon appétit!"
                            </div>
                        </div>

                        <div className='services-box'>
                            <a href='/main/rooms' className='main-services-link' >
                                <img loading="lazy"  src="https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=600" alt='rooms'/>
                                <div className='services-box-details'>
                                    <h4>Rooms</h4>
                                    <p>Book a room that suites your's, family's or groups's needs</p>
                                    <div className='make-order'>Book a Room</div>
                                </div>  
                            </a>
                            <div className='main-services-details'>
                                "Step into your sanctuary of comfort and luxury!<br/>
                                Our rooms section welcomes you to a world of tranquility and elegance,<br/>
                                where every detail is designed to enhance your stay.<br/>
                                From cozy retreats to opulent suites,<br/>
                                each room is a haven of relaxation, offering a perfect blend of style and functionality. <br/>
                                Discover your home away from home amidst a symphony of comfort and sophistication."
                            </div>
                        </div>
                        <div className='services-box'>
                            <a href='/main/games'  className='main-services-link' >
                                <img loading="lazy"  src="https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&w=600" alt='activities'/>
                                <div className='services-box-details'>
                                    <h4>Activities</h4>
                                    <p>Engage with other guests in both physical and mental activities the resort offers</p>
                                    <div className='make-order'>Check out Activities</div>
                                </div>
                            </a>
                            <div className='main-services-details'>
                                "Embark on unforgettable adventures and create memories to last a lifetime!<br/>
                                Our activities section invites you to dive into a realm of excitement and exploration.<br/>
                                Whether you seek adrenaline-pumping thrills or serene moments of relaxation,<br/>
                                our diverse array of experiences caters to every preference. <br/>
                                From outdoor escapades to cultural immersions, there's something for everyone to enjoy.<br/>
                                Let the adventure begin!"
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-footer'>
                    <div className='footer-left'>
                        <div className='footer-left-time'>
                            <p>{ time.toLocaleDateString()}</p>
                            <p>{ time.toLocaleTimeString() }</p>
                        </div>
                        <p>Follow Us</p>
                        <div className='footer-left-follow'>
                            <div><i class="fa-brands fa-facebook"></i></div>
                            <div><i class="fa-brands fa-twitter"></i></div>
                            <div><i class="fa-brands fa-instagram"></i></div>
                            <div><i class="fa-brands fa-linkedin"></i></div>
                        </div>
                        <h4 className='footer-left-copyright'>
                            @2024 copyright
                        </h4>
                        <i>Designed by Jimmy Rubia</i>
                    </div>
                    <div className='footer-right'>
                        <div><p>Lorem</p> <p>proident</p> <p>labore</p>   <p>dolore</p></div>
                        <div>        <p>architecto</p>        <p>voluptatem</p>   <p>veniam</p></div>
                        <div>   <p>exercitationem </p>     <p>consequuntur </p>    </div>
                        <div>   <p>incididunt</p>   <p>voluptas </p>  <p>proident</p></div>
                        <div>          <p>reprehenderit </p>  <p>labore</p>   <p>dolore</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
