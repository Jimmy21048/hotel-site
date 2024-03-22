import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div className="main">
            <div className="main-top">
                <header className="main-header">
                    <h2>Uradi Encore Resort</h2>
                    <div className="main-header-tabs">
                        <Link to="/about" >About Us</Link>
                        <Link to="/" >Home</Link>
                    </div>
                </header>
                <div className="main-top-body">
                    <p>Create an account with us and enjoy all the luxury we have to offer</p>
                    <span>
                        <Link to="/signup" >Sign up</Link>
                        <Link to="/login" >Log in</Link>
                    </span>
                </div>
            </div>
            <div className="main-bottom">
                <h4>Our deals</h4>
                <div className="main-bottom-body">
                    <Link to="/main/foods" ><img loading="lazy" src="./images/foods.jpg" alt="delicacies" /> <p>Delicacies</p></Link>
                    <Link to="/main/rooms" ><img loading="lazy"  src="./images/rooms.jpg" alt="hotel rooms" /> <p>Rooms</p></Link>
                    <Link to="/main/games" ><img loading="lazy"  src="./images/games.jpg" alt="games" /> <p>Games</p></Link>
                    <Link to="/main/scenary" ><img loading="lazy"  src="./images/scenary.jpg" alt="scenes" /> <p>Scenary</p></Link>
                </div>
            </div>
        </div>
    )
}