import Services from "./ServicesHeader"
import Tabs from "./Tabs";
import { foods } from "./foodsArray";

export default function Foods() {
    const bFast =foods.filter((food) => {
        return food.category.toLowerCase() === "beverage"               
    })
    const lunch = foods.filter((food) => {
        return food.category.toLowerCase() === "main-course";
    })
    const dessert = foods.filter((food) => {
        return food.category.toLowerCase() === "dessert";
    })
    const sandwich = foods.filter((food) => {
        return food.category.toLowerCase() === "sandwich";
    })
    const salad = foods.filter((food) => {
        return food.category.toLowerCase() === "salad";
    })
    return (
        <div className="foods">
            <Services />
            <img className="categories-bgc-img" src="../images/home11.png" alt="foods-bgc" />
            <Tabs
             tabItems = {['hot-beverages', 'main-course', 'dessert']} />
            <div id="hot-beverages">
                <h3>Hot Beverages</h3>
                <div className="food-items">
                    {
                        bFast.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>Ksh {food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.name +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="main-course">
            <h3>Main Course</h3>
                <div className="food-items">
                    {
                        lunch.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>{food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.name +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="dessert">
                <h3>Dessert</h3>
                <div className="food-items">
                    {
                        dessert.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>Ksh {food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.name +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="sandwich">
                <h3>Sandwich</h3>
                <div className="food-items">
                    {
                        sandwich.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>Ksh {food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.name +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="salad">
                <h3>Salads</h3>
                <div className="food-items">
                    {
                        salad.map((food) => {
                            return (
                                <div className="food">
                                    <div className="food-info">
                                        <p>{food.name}</p>
                                        <p>Ksh {food.price}</p>
                                    </div>
                                    <img src={food.img} alt={food.name +" "+ food.category} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}