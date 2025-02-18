
import Services from "./ServicesHeader"
import axios from "axios";
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { useContext, useEffect, useState } from "react";
import Loading from './Loading';

export default function Book() {
    const history = useNavigate();
    const { loginState, setLoginState } = useContext(AuthContext);
    const [available, setAvailable] = useState();
    const [loading, setLoading] = useState(true);

    const params = new URLSearchParams(window.location.search);
    const arrive =  params.get("arrive");
    const leave = params.get("leave");
    const people = params.get("guests");
    const type = params.get("type");
    const price = params.get("price");

    const arriveCalc = new Date(arrive);
    const leaveCalc = new Date(leave);

    const arriveTime = arriveCalc.getTime();
    const leaveTime = leaveCalc.getTime();

    const days = (leaveTime -arriveTime) / (1000 * 60 * 60 * 24);

    const initialValues = {
        type: type,
        arrive: arrive,
        leave: leave,
        people: people,
        days: days,
        total: price
    }

    useEffect(() => {

        axios.get(process.env.REACT_APP_DETAILS_ROOM, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
                roomType: type,
                arrive: arrive,
                leave: leave
            }
        })
        .then((response) => {
            setLoading(false);
            if(response.data.error) {
                setLoginState("please log in");
                history('/');
            } else {
                setAvailable(response.data);
            }
            
        })
    }, []);


    
    const onSubmit = (data) => {
        if(window.confirm("Confirm booking")) {    
            data.room = available;
            axios.post(process.env.REACT_APP_ACCOUNT, data, {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            })
            .then((response) => {
                if(response.data.error) {
                    setLoginState("please log in");
                    history('/');
                } else if(response.data.message) {
                    setLoginState(response.data.message);

                    setTimeout(() => {
                        setLoginState("");
                    }, 8000);
                } else {
                    setLoginState("");
                    history('/account');
                }
                
            })
        }
    }

    if(loading) {
        return <Loading />
    }
    return (
        <div className="bookings">
            <Services />

            <div className="bookings-body">
                <h3>History</h3>
                <div className="active-bookings">
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form>
                        <label>
                            <Field
                            type="text"
                            value={type}
                            name="type" />
                        </label>
                        <label>From : 
                            <Field 
                            type="date" 
                            value={arrive} 
                            name="arrive"/>
                        </label>
                        <label>To : 
                            <Field 
                            type="date" 
                            value={leave} 
                            name="leave"/>
                        </label>
                        <label>People : 
                            <Field
                            type="number" 
                            value={people} 
                            name="people"/>
                        </label>
                        <label>Days : 
                            <Field 
                            type="number" 
                            value={days} 
                            name="days"/>
                        </label>
                        <label>Ksh : 
                            <Field 
                            type="number" 
                            value={price * days} 
                            name="total"/>
                        </label>
                        <div className="label-status">Status: 
                            {
                                available > 0 ? <div>Room {available} available</div> :
                                <div>Room not Available</div>
                            } 
                            
                        </div>
                        {
                            available > 0 ? <button type="submit" className="designated-button">Book</button> :
                            ''
                        }
                        <a href={"/main/rooms/" + type} className="designated-button">Change Booking</a>
                        <a href="/account" className="designated-button">View Bookings</a>
                        </Form>
                    </Formik>
                    <p className="msgs" style={{ color: "red" }}>{ loginState }</p>
                </div>
            </div>

        </div>
    )
}