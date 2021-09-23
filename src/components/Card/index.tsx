import './index.css'
import React from "react";
import {Props, Year} from "../../interfaces";

function getColor(year: Year): string {
    let color: string = "";

    switch(year.type) {
        case 1:
            color = "#ff2d2d";
            break;
        case 2:
            color = "#54c3ff";
            break;
        case 3:
            color = "#ff852b";
            break;
        case 4:
            color = "#5c9a36";
            break;
        case 5:
            color = "#ffb600";
            break;
        case 6:
            color = "#a95fb6";
            break;
        case 7:
            color = "#909090";
            break;
    }

    return color;
}

function Card(props: Props) {
    return (
        <div className="year-card">
            <span className="square" style={{background: getColor(props.year)}} />
            <div>
                <strong className="title">{ props.year._ }</strong>
                &nbsp;({props.year.date.weekdayShort})
                <div className="subtitle">{ props.year.leap && "Leap year " }({props.year.code})</div>
            </div>
        </div>
    );
}

export default Card;