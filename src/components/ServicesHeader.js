import { Link } from "react-router-dom"
export default function Services() {
    return (
        <header className="services-header">
            <Link to="/main"><i className="fa-solid fa-circle-arrow-left"></i></Link>

            <input type='checkbox' id="btn"/>
            <label htmlFor="btn" id="btn1"><i className="fa-solid fa-bars"></i></label>
            <div className="services-tabs">
                <label htmlFor="btn" id="btn2"><i className="fa-solid fa-xmark"></i></label>
                <Link to="/main/foods">Food</Link>
                <Link to="/main/rooms">Rooms</Link>
                <Link to="/main/games">Activities</Link>
                <Link to="/main/scenary">Scenary</Link>
            </div>
        </header>
    )
}