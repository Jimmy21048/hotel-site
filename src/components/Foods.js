import Services from "./ServicesHeader"
import Tabs from "./Tabs";
import { foods } from "./foodsArray";
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Foods() {
    const [checkFood, setCheckFood] = useState(false);
    const [selectedFood, setSelectedFood] = useState();
    const { username } = useContext(AuthContext);
    const [bookedRooms, setBookedRooms] = useState();
    const history = useNavigate();

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

    useEffect(() => {
        // axios.get("http://localhost:3001/foods", {
        axios.post('https://uradi-encore-server.onrender.com/foods', {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response) => {
            setBookedRooms(response.data);         
        })
    }, [])
    
    function onSubmit() {
        const data = {};
        data.foodName = selectedFood.name;
        data.foodPrice = selectedFood.price;
        data.room = document.getElementById("theRoom").value;

            if(window.confirm("Confirm food order to room " + data.room)) {
                // axios.post("http://localhost:3001/foods/order", data, {
                    axios.post('https://uradi-encore-server.onrender.com/account', data, {
                    headers: {
                        accessToken: localStorage.getItem("accessToken")
                    }
                }).then((response) => {
                    console.log(response);
                    setCheckFood(false);
                })
            }
    }
    return (
        <div className="foods">
            <Services />
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
                            {
                                bookedRooms.length > 0 ? 
                                <select required name="roomNo" id="theRoom">
                                {
                                    bookedRooms.map((room) => {
                                        return (
                                            <option key={room.room_no} value={room.room_no}>Room {room.room_no}</option>
                                        )
                                    })
                                }
                                </select> :
                                <p style={{color: "red"}}>Not booked in</p>
                            }
                        </div>
                        <i className="courtesy">Hello { username.current.fname }</i>
                        <i className="courtesy">Courtesy of Uradi Encore</i>
                        <div className="food-clicked-footer">
                            {
                                bookedRooms.length > 0 ? <button className="designated-button" onClick={onSubmit}>ORDER</button> :
                                <a href="/main/rooms" className="designated-button">Book a room</a>
                            }
            
                            <div>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            </div>
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