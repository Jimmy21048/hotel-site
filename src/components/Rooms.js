import Services from "./ServicesHeader";
import Tabs from "./Tabs";
import { rooms } from "./roomsArray";
import { Link } from "react-router-dom";

export default function Rooms() {
    return (
        <div className="rooms">
            <Services />
            <img className="categories-bgc-img" src="../images/rooms22.png" alt="rooms-bgc" />
            <Tabs tabItems = {['rooms']} />
            <div id="rooms">
                {
                    rooms.map((room) => {
                        return (
                            <Link to={"/main/rooms/" + room.type} className="room" key={room.type}>
                                <h3>{room.type}</h3>
                                <img src={room.image} alt="room-type" />
                                <div className="room-props">
                                    <h4>Ksh{room.price} per {room.time} hrs</h4>
                                    <p>{room.desc}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}