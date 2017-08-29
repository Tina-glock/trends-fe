import React, { Component } from 'react';
import rd3 from 'rd3';


let LineChart = rd3.LineChart
let lineData = [
    {
        name: 'react',
        values: [ { x: 0, y: 1125 }, { x: 1, y: 987 }, { x: 2, y: 1234 }, { x: 3, y: 1098 }, { x: 4, y: 1123 }, { x: 5, y: 865 }, { x: 6, y: 643 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
    },
    {
        name: 'meteor',
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
    },
    {
        name: 'vue',
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
    },
    {
        name: 'angular',
        values: [ { x: 0, y: 468 }, { x: 1, y: 543 }, { x: 2, y: 198 }, { x: 3, y: 453 }, { x: 4, y: 300 }, { x: 5, y: 267 }, { x: 6, y: 135 } ]
    }
];

class Charts extends Component {
    render() {
        return (
            <div className="Charts">
                <LineChart
                    legend={true}
                    data={lineData}
                    width='75%'
                    height={400}
                    viewBoxObject={{
                        x: 0,
                        y: 0,
                        width: 500,
                        height: 400
                    }}
                    title="the Last view"
                    yAxisLabel="Requests"
                    xAxisLabel="days"
                    domain={{x: [,6], y: [-20,]}}
                    gridHorizontal={true}
                />
            </div>
        );
    }
}

export default Charts;