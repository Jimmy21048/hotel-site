import Services from "./ServicesHeader";
import Tabs from "./Tabs";

export default function Scenary() {
    return (
        <div className="scenary">
            <Services />
            <img className="categories-bgc-img" src="../images/scenary1.png" alt="scenary-bgc" />
            <Tabs tabItems = {['Scene Watching']} />
        </div>
    )
}