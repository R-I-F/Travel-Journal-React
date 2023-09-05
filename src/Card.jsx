import React from "react";
export default function Card(props){
    return (
        <div className="card">
            <img src = {props.img}/>
            <div className="card-info">
                <i className="fa-solid fa-location-dot"></i>
                <div className="card-info-location"><span>{props.location}</span><a href= {props.mapLink}>View on google maps</a></div>
                <h1>{props.title}</h1>
                <h3>{props.date.startDate} - {props.date.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}