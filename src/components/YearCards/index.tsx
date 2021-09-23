import React from "react";
import {Year, YearCardsProps, YearCollection} from "../../interfaces";
// @ts-ignore
import forEach from "lodash/forEach";
// @ts-ignore
import {DateTime} from 'luxon';
import Card from "../Card";

function getYear(year: number): Year {
    const date = DateTime.utc(year, 1, 1);

    const newVar = {
        _: year,
        date,
        type: date.weekday,
        leap: date.isInLeapYear,
        code: (date.weekday + (date.isInLeapYear ? 7 : 0)).toString(16),
        card: function () { return <Card key={this._} year={this} /> }
    };

    newVar.card = newVar.card.bind(newVar)
    return newVar;
}



function generate(startYear: number, endYear: number): YearCollection {

    let code: string = "";
    const years: Year[] = [];
    for (let i = startYear; i <= endYear; i++) {
        const year = getYear(i);
        years.push(year);
        code += year.code
    }

    return {_:years, code};
}

function cards(years: Year[]): JSX.Element[] {
    const cards: JSX.Element[] = [];
    forEach(years, (year: Year) => {
        cards.push(year.card())
    })

    return cards
}

function YearCards(props: YearCardsProps) {
    const years = generate(props.min, props.max)
    return (
        <>
            <h3>{props.min} - {props.max}</h3>
            <div className="year-cards" onScroll={props.onScroll}>
                {
                    cards(years._)
                }
            </div>
            <p className="code">{years.code}</p>
        </>
    );
}

export default YearCards

export { generate }