import React from 'react';
import YearCards from "./components/YearCards";

/**
 *
 * 1: Starts on monday
 * 2: Starts on tuesday
 * 3: Starts on wednessday
 * 4: Starts on thursday
 * 5: Starts on friday
 * 6: Starts on saturday
 * 7: Starts on sunday
 */
// console.log(generate(0, 2300).code)

let scrollPos = 0


function outOfScreen(element: Element) {
    const rect = element.getBoundingClientRect();

    return !(
        rect.top + rect.height >= 0 &&
        rect.bottom - rect.height <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function setScrollPos(event: any) {
    scrollPos = event.target.scrollLeft
    document.querySelectorAll(".year-cards").forEach(e => {
        if (e === event.target || outOfScreen(e)) {
            return;
        }
        e.scrollLeft = scrollPos
    })
}

window.onscroll = function () {
    document.querySelectorAll(".year-cards").forEach(e => {
        if (outOfScreen(e)) {
            return;
        }
        e.scrollLeft = scrollPos
    })
}
const begin = 1709
// const begin = 2109
let start:number = begin

function generateGroup(groups: JSX.Element[]) {
    const options = [28, 28, 28, 12, 28, 28, 28, 12, 28, 28, 28, 28, 28, 28, 28, 12]
    let current: number = start
    for (let i = 0; i < options.length; i++) {
        const min:number = current + 1 - 1
        const max:number = current + options[i] -1
        groups.push(<YearCards
            key={min}
            min={min}
            max={max}
            onScroll={setScrollPos} />);
        current += options[i]
    }
    start += current
}

function App() {
    const groups: JSX.Element[] = [];

    start = begin
    generateGroup(groups);


    return (
        <div className="App">
            {groups}
            {/*<YearCards min={28} max={55} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={56} max={55+27} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={1810} max={1837} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={1838} max={1865} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={1866} max={1893} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={1894} max={1901} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={1902} max={1929} scrollPos={scrollPos} onScroll={setScrollPos} />*/}
            {/*<YearCards min={1930} max={1957} scrollPos={scrollPos} onScroll={setScrollPos} />*/}

        </div>
    );
}

export default App;
