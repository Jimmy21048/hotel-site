import Services from "./ServicesHeader"
import Tabs from "./Tabs";
import { foods } from "./foodsArray";

export default function Foods() {
    const bFast =foods.filter((food) => {
        return food.category.toLowerCase() === "breakfast"               
    })
    const lunch = foods.filter((food) => {
        return food.category.toLowerCase() === "lunch";
    })
    return (
        <div className="foods">
            <Services />
            <img className="categories-bgc-img" src="../images/home11.png" alt="foods-bgc" />
            <Tabs
             category = "foods"
             tabItems = {['Breakfast', 'Lunch', 'Supper']} />
            <div id="Breakfast">
                <h3>Breakfast</h3>
                <div className="food-items">
                    {
                        bFast.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>{food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.img +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="Lunch">
            <h3>Lunch</h3>
                <div className="food-items">
                    {
                        lunch.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>{food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.img +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}