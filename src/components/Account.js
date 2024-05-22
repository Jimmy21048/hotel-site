import React, { useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Services from './ServicesHeader';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';



function Account() {
  const [bookings, setBookings] = useState([]);
  const [consistentBookings, setConsistentBookings] = useState([]);
  const [userData, setUserData] = useState([]);
  const history = useNavigate();
  const { setLoginState } = useContext(AuthContext);
  const time = new Date().getHours();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // axios.get('http://localhost:3001/account', {
    axios.get('https://uradi-encore-server.onrender.com/account', {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then((response) => {
      if(response.data.error || response.error) {
        setLoginState("Please log in");
        history('/');
      } else {
        setUserData(response.data.user[0]);
        setBookings(response.data.userData); 
        setConsistentBookings(response.data.userData); 
      }
      
    })


  }, []);

  function showHidden(id) {
    let newBookings = bookings.filter((booking) => {
      return booking.book_id === id
    })
    setBookings(newBookings);
    setHidden(false);
  }
  function hide() {
    setBookings(consistentBookings);
    setHidden(true);
  }
  return (
    <div className='account-body'>
      {/* <Services /> */}
      <div className='account-body-header'>
        <div className='account-bio'>
          <div className='user-initials'>
            <p>{ userData.initials}</p>
          </div>
          <div className='user-name'>
              {
                (time >= 0 && time < 12) ? 
                <p>Good morning</p> :
                <p>Good evening</p>
              }
            <h4>{ userData.user_fname} &#128075;</h4>
          </div>
        </div>
        <div className='user-account-icons'>

        </div>
      </div>
      <hr />
      <div className='account-details'>
        <div className='user-spendings'>
          <p>Spendings</p>
          <p>Ksh. 500</p>
          <p>{userData.user_email}</p>
        </div>

        <div className='hotel-services'>
          <Link to='/main/foods'><i className="fa-solid fa-mug-hot" style={{backgroundColor: "green"}} ></i>Menu</Link>
          <Link to='/main/rooms' ><i className="fa-solid fa-bed" style={{backgroundColor: "blue"}} ></i>Rooms</Link>
          <Link to='/main/games' ><i className="fa-solid fa-puzzle-piece" style={{backgroundColor: "red"}} ></i>Activities</Link>
          <Link to='/about' ><i className="fa-solid fa-circle-info" style={{backgroundColor: "powderBlue"}} ></i>About</Link>
        </div>
      </div>
      <div className='account-bookings'>
        <p>BOOKINGS</p>
        <div className="account-body-active">
                {
                  bookings.length === 0 ?
                  <>
                    <p>You have no active bookings</p>
                    <div>
                    <a className='designated-button' href='/main/rooms'>Book Now</a>
                    </div>
                  </> :
                  <>
                    {
                        bookings.map((booking) => {
                            return (
                                <div className={ hidden ? "account" : "account2"} key={booking.book_id}>
                                    <i className="fa-solid fa-bed" style={{backgroundColor: "blue"}}></i>
                                    <p>Room {booking.room_no}</p>
                                    <p>{booking.book_type}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>{booking.book_days > 1 ? booking.book_days + ' days' : booking.book_days + ' day'}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>From {booking.book_from }</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>To {booking.book_to}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>{booking.book_people > 1 ? booking.book_people + ' people' : booking.book_people + ' person'}</p>
                                    <p>{(Date.now() - new Date(booking.book_from).getTime()) / (1000 * 60 * 60 *24) < 0 ?
                                        `Check In on ${booking.book_from}` :
                                        ((Date.now() - new Date(booking.book_to).getTime()) / (1000 * 60 * 60 * 24) > 0) ?
                                        `Expired` :
                                        `CheckedIn`
                                    }</p>
                                    {
                                      hidden ? 
                                      <button onClick={() => showHidden(booking.book_id)}>more...</button> :
                                      <button onClick={() => hide()}>hide...</button>
                                    }
                                </div>
                            )
                        })
                    }
                  </>
                }

            </div>
      </div>

    </div>
  )
}

export default Account
