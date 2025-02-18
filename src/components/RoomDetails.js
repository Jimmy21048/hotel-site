import { useParams, Link } from "react-router-dom"
import { rooms } from "./roomsArray";

export default function RoomDetails() {
    const { id } = useParams();
    let theRoom = rooms.filter((room) => {
        return room.type === id;
    })
    theRoom = theRoom[0];
    
    return (
        <div className="room-details">
            <header className="room-details-header">
                <Link to="/main/rooms#rooms"><i className="fa-solid fa-circle-arrow-left"></i>See all rooms</Link>
                <h2><i>Uradi Encore Hotel & Suites</i></h2>
            </header>
            <div className="room-details-body">
                <h3>{theRoom.type}</h3>
                <img src={theRoom.image} alt="room-type" />
                <ul>
                    {
                        theRoom.props.map((prop) => {
                            return <li>{prop}</li>
                        })
                    }
                </ul>
                <div className="room-desc">{theRoom.desc}</div>
                <a className="designated-button" href="/account">View my Bookings</a>
                <p className="msgs" style={{color:"red"}}>Checkouts must be done before the midnight of the set date!</p>
                <h4>Book Room</h4>
                <form action="/booking" method="get">
                    <input hidden type="text" value={theRoom.type} name="type" />
                    <input hidden type="number" value={theRoom.price} name="price" />
                    <label>
                        Check In
                        <input type="date"  name="arrive" required />
                    </label>
                    <label>
                        Check Out
                        <input type="date"  name="leave" required />
                    </label>
                    <label>
                        People
                        <input type="number" defaultValue={1} name="guests" required />
                    </label>
                    <button className="designated-button">Book Now</button>
                    
                </form>
            </div>
        </div>
    )
}