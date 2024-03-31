import React, { useEffect, useRef, useState } from "react";
import Services from "./ServicesHeader"

export default function Book() {
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

    return (
        <div className="bookings">
            <Services />

            <div className="bookings-body">
                <h3>Pending Bookings</h3>
                <div className="active-bookings">
                    <form>
                        <label>
                            <input type="text" value={type} />
                        </label>

                        <label>From : 
                            <input type="date" value={leave} />
                        </label>

                        <label>To : 
                            <input type="date" value={arrive} />
                        </label>

                        <label>People : 
                            <input type="number" value={people} />
                        </label>
                        <label>Days : 
                            <input type="number" value={days} />
                        </label>
                        <label>Ksh : 
                            <input type="number" value={price * days} />
                        </label>

                        <button>PAY</button>
                    </form>
                </div>
            </div>
        </div>
    )
}