// @ts-ignore
import { DateTime } from 'luxon';
import {UIEventHandler} from "react";

interface Props {
    year: Year
}

interface Year {
    _: number
    date: DateTime
    type: number
    leap: boolean
    code: string
    card: Function
}

interface YearCollection {
    code: string
    _: Year[]
}

interface YearCardsProps {
    min: number
    max: number
    onScroll: any
}

interface IUIEVentFunction {
    (event: UIEventHandler): void
}

export type {
    Year,
    Props,
    YearCollection,
    YearCardsProps
}