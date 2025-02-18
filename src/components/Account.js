import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import Logout from './Logout';
import Loading from './Loading';


function Account() {
  const [bookings, setBookings] = useState([]);
  const [consistentBookings, setConsistentBookings] = useState([]);
  const [userData, setUserData] = useState([]);
  const [orders, setOrders] = useState([]);
  const history = useNavigate();
  const { setLoginState } = useContext(AuthContext);
  const time = new Date().getHours();
  const [hidden, setHidden] = useState(true);
  const [showStatements, setShowStatements] = useState(false);
  const [checkLink, setCheckLink] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get(process.env.REACT_APP_ACCOUNT, {
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
        setOrders(response.data.orders);
        setLoading(false);
      }
      
    }).catch((error) => {
      console.log(error);
    })


  }, [loading]);


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

  function countOrders() {
    let sum = 0; 

    for(let i in orders) {
        sum+=orders[i].order_price
    }
    return sum;
  }
  const statementTotal = countOrders();

  function handleInputClicked() {
    const copyText = document.getElementById("input-clicked");

    navigator.clipboard.writeText(copyText.value);
    document.querySelector("#link-copied").innerHTML = "Link copied to clipboard"
  }

  function handleDeleteBook(id) {
    axios.post(process.env.REACT_APP_DELETE_BOOKING, {id: id}, {
      headers: {
        accessToken: localStorage.getItem("accessToken")
      }
    }, setLoading(true))
    .then(response => {
      setLoading(false);
      setHidden(true);
    })
  }

  function handleCancelBook(id) {
    if(window.confirm("Cancel Booking ?")) {
      handleDeleteBook(id);
    }
  }

  if(loading) {
    return <Loading />
  }
  return (
    <div className='account-body'>
      {
        checkLink &&
        <div className='food-clicked'>
            <button onClick = {() => setCheckLink(false)} >
            {
              navigator.onLine ? <i className="fa-solid fa-xmark"></i> :
              'Close'
            }
            </button>
            <input disabled style={{backgroundColor: "transparent", border: "none"}} type='text' value="https://uradi-encore-hotel.vercel.app" id='input-clicked' />
            <button onClick={handleInputClicked}>Copy link</button>
            <p id='link-copied'></p>
        </div> 
      }
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
              <a href=''><i className="fa-regular fa-bell"></i></a>
        </div>
      </div>
      <div className='account-details'>
        <div className='user-spendings'>
          <p>Spendings</p>
          <p>Ksh. {statementTotal}</p>
          <p>{userData.user_email}</p>
        </div>

        <div className='hotel-services'>
          <Link to='/main/foods'><i className="fa-solid fa-mug-hot" ></i>Menu</Link>
          <Link to='/main/rooms' ><i className="fa-solid fa-bed" ></i>Rooms</Link>
          <Link to='/main/games' ><i className="fa-solid fa-puzzle-piece" ></i>Activities</Link>
          <Link to='/about' ><i className="fa-solid fa-circle-info" ></i>About</Link>
        </div>
      </div>
      <div className='account-bookings'>
        <p className='acc-bookings-p'>BOOKINGS</p>
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
                                    <i className="fa-solid fa-bed"></i>
                                    <p>Room {booking.room_no}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>{booking.book_type}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>{booking.book_days > 1 ? booking.book_days + ' days' : booking.book_days + ' day'}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>From {booking.book_from }</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>To {booking.book_to}</p>
                                    <p className={ hidden ? 'p-hidden' : '' }>{booking.book_people > 1 ? booking.book_people + ' people' : booking.book_people + ' person'}</p>
                                    <p style={{fontSize: "0.7rem"}}>{booking.book_status === 0 ? `Check In on ${booking.book_from}` : booking.book_status === 2 ? `Expired` : booking.book_status === 1 ? `CheckedIn`: 'Error' }</p>
                                    {
                                      !hidden && booking.book_status === 2 ? <button onClick={() => handleDeleteBook(booking.book_id)}>Del</button> : ( !hidden && booking.book_status === 0) ? <button onClick={() => handleCancelBook(booking.book_id)}>Cancel booking</button> : ''
                                    }
                                    {
                                      hidden ? 
                                      <button onClick={() => showHidden(booking.book_id)}>Info...</button> :
                                      <button onClick={() => hide()}>hide</button>
                                    }
                                </div>
                            )
                        })
                    }
                  </>
                }

            </div>
      </div>
      <div className='account-statements' style={{height: showStatements? "max-content" : "8vh"}}>
        <div className='account-statements-header'><p>STATEMENTS</p> {!showStatements ? <button onClick={() => setShowStatements(true)}>SEE ALL</button>: <button onClick={() => setShowStatements(false)}>HIDE</button>}</div>
        {
          orders.length === 0 && <p style={{color:"#9e9e9e", fontSize: "0.9rem"}}>No orders made</p>
        }
        {
          orders.map((order) => {
            return (
              <div className='statement' key={order.order_id}>{order.room_no}: <p>{order.order_name}</p> <p>{order.order_date}</p> <p style={{color: "#03C03C"}}>+{order.order_price}</p></div>
            )
          })
        }
      </div>
      <div className='account-settings'>
        <p>SETTINGS</p>
        <Link className='setting' onClick={() => setCheckLink(true)}><i  className="fa-solid fa-link"></i>SHARE LINK</Link>
        <Logout />
        
        
      </div>

    </div>
  )
}

export default Account
