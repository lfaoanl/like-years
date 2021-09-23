# Like years
Let's say we have a year when the 1st of January is on a Monday. The next year will start on a Tuesday, unless the year is a leap year. With this setup the calendar wich starts on a monday will come back eventually.

This sequence repeats itself, and I was curious what this sequence would be and how often patterns would repeat itself.

## Goal
I want to know the continuing sequence of years without breaking the pattern and how long this sequence is.

## Types of calendar
There are only fourteen types of calendars. When the year starts on every day of the week, and the leap yer variations of it.

I gave each type of calendar its own code to see repeating patterns more easily.
Each code corresponds to which day the first of Januari falls.

|  Code | Year starts on a | Is a leap year | color
|-----|---|---|---
| 1 | <span style="color:#ff2d2d;">Monday</span> | |Red
| 2 | <span style="color:#54c3ff;">Tuesday</span> | |Blue
| 3 | <span style="color:#ff852b;">Wednesday</span> | |Orange
| 4 | <span style="color:#5c9a36;">Thursday</span> | |Green
| 5 | <span style="color:#ffb600;">Friday</span> | |Yellow
| 6 | <span style="color:#a95fb6;">Saturday</span> | |Purple
| 7 | <span style="color:#909090;">Sunday</span> | |Gray
| 8 | <span style="color:#ff2d2d;">Monday</span> | Yes|Red
| 9 | <span style="color:#54c3ff;">Tuesday</span> | Yes|Blue
| a | <span style="color:#ff852b;">Wednesday</span> | Yes|Orange
| b | <span style="color:#5c9a36;">Thursday</span> | Yes|Green
| c | <span style="color:#ffb600;">Friday</span> | Yes|Yellow
| d | <span style="color:#a95fb6;">Saturday</span> | Yes|Purple
| e | <span style="color:#909090;">Sunday</span> | Yes|Gray

I will reference every calendar according to their code
### Leap years
The sequence would've been 7 if not for leap years. Because a leap year is every 4 years, hence the year will start on another day than the previous leap year. 

> #### When is a leap year?
>To be a leap year, the year number must be divisible by four – except for end-of-century years, which must be divisible by 400. This means that the year 2000 was a leap year, although 1900 was not.
2020, 2024 and 2028 are all leap years.  
>[Source: Royal Museums Greenwich](https://www.rmg.co.uk/stories/topics/which-years-are-leap-years-can-you-have-leap-seconds)

## Conclusion
Every 28 years a sequence can repeat itself. 
Every leap year calendar (`8-e`) will have had the chance 
to appear in the sequence. Except that every 100 years the leap year skips a year.

This will give the sequence of 28 years the chance to appear at least 3 times before it breaks the sequence.
Let's call these 3 repeating order of years a `full-block`.
After these full-blocks something interesting happens, it will try to repeat the sequence but finds itself an end-of-century year and will mess up the sequence.
Only 12 years is needed to correct itself and start the three full-blocks again.
These 12 years, we'll call a `half-block`

The full blocks will always be the same pattern. 
The half blocks will start the same. Somewhere in the middle it encounters an end-of-century year and will fall back on the full-block sequence again. It will do this always in 12 years.

The full sequence is 400 years long. In these 400 years the following pattern of blocks will always occur.

| Number of blocks | Years in block
|---|----|
| 3 | 28 (full-block) |
| 1 | 12 (half-block)|
| 3 | 28 |
| 1 | 12 |
| 7 | 28 |
| 1 | 12 |

##### *Hindsight*
*Considering the largest exception in the leap year rule is 400. The answer had to be 400 years.*

## Our place in the sequence
The sequence we are currently in starts in 1709 and ends in 2108.
According to [Royal Museums Greenwich](https://www.rmg.co.uk/stories/topics/which-years-are-leap-years-can-you-have-leap-seconds) we only adapted the current calendar in the year 1752. Which means that we are in the first sequence to ever occur, and we didn't even start it from the beginning. 


The data provider before the year 1752 is calculated using the calendars current method and not how the dates actually used to be.

## The data
The data is provided in the sequence.md file. 

For a more visual representation of the current sequence I encourage you to build the project and scroll through the data.

![](/screenshot.png)