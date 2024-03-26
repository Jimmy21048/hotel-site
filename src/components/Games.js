import Services from "./ServicesHeader";
import Tabs from "./Tabs";
import { activities } from "./activitiesArray";

export default function Games() {
    return (
        <div className="games">
            <Services />
            <img className="categories-bgc-img" src="../images/games2.png" alt="games-bgc" />
            <Tabs tabItems = {['activities']} />
            <div id="activities">
                {
                    activities.map((activity) => {
                        return (
                            <div className="activity">
                                <div className="activity-info">
                                    <h3>{activity.name}</h3>
                                    <p>{activity.desc}</p>
                                </div>
                                <img src={activity.img} alt={activity.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}