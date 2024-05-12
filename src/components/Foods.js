import Services from "./ServicesHeader"
import Tabs from "./Tabs";
import { foods } from "./foodsArray";
import { useState} from 'react'

export default function Foods() {
    const [checkFood, setCheckFood] = useState(false);
    const [selectedFood, setSelectedFood] = useState();
    const [yes, setYes] = useState(0);

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

   function handleFood(food) {
        if(!checkFood) {
            setCheckFood(true);
        
            const item = foods.filter((fd) => {
                return fd.name === food;
            })
            setSelectedFood(item[0]);
        }
    }
    return (
        <div className="foods" onClick={ checkFood ? () => setCheckFood(false) : () => setYes(1)}>
            <Services />
            {/* <img className="categories-bgc-img" src="../images/home11.png" alt="foods-bgc" /> */}
            <Tabs       
             checkFood={checkFood}
             tabItems = {['hot-beverages', 'main-course', 'dessert']} />

                {
                checkFood ? 
                    <div className="food-clicked">
                        <div className="food-clicked-header">
                            <div className="fch-details">
                                <h3>{ selectedFood.name }</h3>
                                <p>{ selectedFood.price }</p>
                            </div>
                            <button onClick={() => setCheckFood(false)} >
                                {
                                    navigator.onLine ? <i className="fa-solid fa-xmark"></i> :
                                    'X'
                                }
                            </button>
                        </div>
                        <div  className="food-clicked-body">
                            <img src={selectedFood.img} alt={selectedFood.name} />
                        </div>
                        <i className="courtesy">Courtesy of Uradi Encore</i>
                        <div className="food-clicked-footer">
                            <form>
                                <input type="text" hidden value={selectedFood.name} />
                                <input type="number" hidden value={selectedFood.price} />
                                <button>ORDER</button>
                            </form>

                            <button>*****</button>
                        </div>
                    </div> :
                    ''
                
                }
            <div id="hot-beverages" style={{opacity: checkFood ? .5 : 1}}>
                <h3>Hot Beverages</h3>
                <div className="food-items">
                    {
                        bFast.map((food) => {
                            return (
                                <div className="food" key={bFast.indexOf(food)} onClick={() =>handleFood(food.name)}>
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
            <div id="main-course" style={{opacity: checkFood ? .5 : 1}}>
            <h3>Main Course</h3>
                <div className="food-items">
                    {
                        lunch.map((food) => {
                            return (
                                <div className="food" key={lunch.indexOf(food)} onClick={() =>handleFood(food.name)}>
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
            <div id="dessert" style={{opacity: checkFood ? .5 : 1}}>
                <h3>Dessert</h3>
                <div className="food-items">
                    {
                        dessert.map((food) => {
                            return (
                                <div className="food" key={dessert.indexOf(food)} onClick={() =>handleFood(food.name)}>
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
            <div id="sandwich" style={{opacity: checkFood ? .5 : 1}}>
                <h3>Sandwich</h3>
                <div className="food-items">
                    {
                        sandwich.map((food) => {
                            return (
                                <div className="food" key={sandwich.indexOf(food)} onClick={() =>handleFood(food.name)}>
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
            <div id="salad" style={{opacity: checkFood ? .5 : 1}}>
                <h3>Salads</h3>
                <div className="food-items">
                    {
                        salad.map((food) => {
                            return (
                                <div className="food" key={salad.indexOf(food)} onClick={() =>handleFood(food.name)}>
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