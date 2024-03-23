import Services from "./ServicesHeader"
import Tabs from "./Tabs";

export default function Foods() {

    return (
        <div className="foods">
            <Services />
            <img className="foods-bgc-img" src="../images/home11.png" alt="foods-bgc" />
            <Tabs 
            tabItems = {['Breakfast', 'Lunch', 'Supper']} />
        </div>
    )
}