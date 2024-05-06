import React, { useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Services from './ServicesHeader';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';


function Account() {
  const [bookings, setBookings] = useState([]);
  const [userData, setUserData] = useState([]);
  const history = useNavigate();
  const { setLoginState } = useContext(AuthContext);

  useEffect(() => {
      axios.get('https://uradi-encore-server.onrender.com/account', {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then((response) => {
      if(response.data.error) {
        setLoginState("Please log in");
        history('/main');
      } else {

        setUserData(response.data.user[0]);
        setBookings(response.data.userData); 
      }
      
    })
  }, [bookings]);


  

  return (
    <div className='account-body'>
      <Services />
      <hr />
      <div className='account-details'>
        <div className='user-name'>
          <p>{ userData.user_fname}</p>
          <p>{ userData.user_lname }</p>
        </div>
        <div className='user-email'>
          {
            userData.user_email
          }
        </div>
      </div>
            <h3>Active Bookings</h3>
            <div className="account-body-active">
                
                {
                    bookings.map((booking) => {
                        return (
                            <div className="account" key={booking.book_id}>
                                <p>{booking.book_type}</p>
                                <p>{booking.book_days > 1 ? booking.book_days + ' days' : booking.book_days + ' day'}</p>
                                <p>From {booking.book_from }</p>
                                <p>To {booking.book_to}</p>
                                <p>{booking.book_people > 1 ? booking.book_people + ' people' : booking.book_people + ' person'}</p>
                                <p>{(Date.now() - new Date(booking.book_from).getTime()) / (1000 * 60 * 60 *24) < 0 ?
                                    `STATUS: Check In on ${booking.book_from}` :
                                     ((Date.now() - new Date(booking.book_to).getTime()) / (1000 * 60 * 60 * 24) > 0) ?
                                    `STATUS: Expired` :
                                    `STATUS: CheckedIn`
                                }</p>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Account
