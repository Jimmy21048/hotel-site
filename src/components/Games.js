import Services from "./ServicesHeader";
import Tabs from "./Tabs";

export default function Games() {
    return (
        <div className="games">
            <Services />
            <img className="categories-bgc-img" src="../images/games2.png" alt="games-bgc" />
            <Tabs tabItems = {['Activities']} />
        </div>
    )
}