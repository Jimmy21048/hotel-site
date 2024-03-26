import { useParams } from "react-router-dom"
// import useFetch from "./useFetch";
import { rooms } from "./roomsArray";

export default function RoomDetails() {

    const { id } = useParams();
    let theRoom = rooms.rooms.filter((room) => {
        return room.type === id;
    })
    theRoom = theRoom[0];
    return (
        <div className="room-details">
            <header className="room-details-header">
                <a href="/main/rooms#rooms"><i className="fa-solid fa-circle-arrow-left"></i>See all rooms</a>
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
                <h4>Book Room</h4>
                <form>
                    <label>
                        Arrival Date
                        <input type="date" />
                    </label>
                    <label>
                        Departure Date
                        <input type="date"/>
                    </label>
                    <label>
                        People
                        <input type="number" value={0} />
                    </label>
                    <button>Book Now</button>
                </form>
            </div>
        </div>
    )
}