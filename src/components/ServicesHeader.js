import { Link } from "react-router-dom"
export default function Services({ checkFood }) {
    return (
        <header className="services-header">
            <Link to="/"><img src='../images/uradi-logo2.png' alt='hotel-logo' /></Link>

            <input type='checkbox' id="btn"/>
            <label htmlFor="btn" id="btn1"><i className="fa-solid fa-bars"></i></label>
            <div className="services-tabs">
                <label htmlFor="btn" id="btn2"><i className="fa-solid fa-xmark"></i></label>
                <Link to="/main/foods">Menu</Link>
                <Link to="/main/rooms">Rooms</Link>
                <Link to="/main/games">Activities</Link>
                <Link to="/about">About Us</Link>
            </div>
        </header>
    )
}